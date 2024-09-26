import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import { useContext, useEffect, useState } from "react";
import { FaPaypal } from "react-icons/fa";
import { AuthContext } from "../../../Provider/AuthProvider";
import useAxioseSecure from "../../../Hooks/useAxioseSecure";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";
const CheckoutForm = ({ price, cart }) => {
  const stripe = useStripe();
  const elements = useElements();
  const { user } = useContext(AuthContext);
  const axiosSecure = useAxioseSecure();
  const navigate = useNavigate();

  const [cardError, setCardError] = useState("");
  const [clientSecret, setClientSecret] = useState("");

  useEffect(() => {
    if (typeof price !== "number" || price < 1) {
      console.log("proce is not a number or lass then 1");
      return;
    }
    axiosSecure.post("/create-payment-intent", { price }).then((res) => {
      console.log(res.data.clientSecret);
      setClientSecret(res.data.clientSecret);
    });
  }, []);

  const handleSubmit = async (event) => {
    event.preventDefault();
    // if (!stripe || !elements) {
    //   return;
    // }
    // each type of element.
    const card = elements.getElement(CardElement);
    if (card == null) {
      return;
    }



    // Use your card Element with other Stripe.js APIs
    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: "card",
      card,
    });

    if (error) {
      console.log("[error]", error);
      setCardError(error.message);
    } else {
      setCardError("success!");
      // console.log("[PaymentMethod]", paymentMethod);
    }

    const { paymentIntent, error: confirmError } =
      await stripe.confirmCardPayment(clientSecret, {
        payment_method: {
          card: card,
          billing_details: {
            name: user?.displayName || "anonymous",
            email: user?.email || "unknown",
          },
        },
      });
    if (confirmError) {
      console.log(confirmError);
    }
    console.log(paymentIntent);
    if (paymentIntent.status === "succeeded") {
      console.log(paymentIntent.id);
      setCardError(`Your transiactionId is ${paymentIntent.id}`);
      // paymentInfo data
      const paymentInfo = {
        email: user.email,
        creationTime: user?.metadata.creationTime,
        transitionId: paymentIntent.id,
        price,
        quantity: cart.length,
        status: "order pending",
        itemName: cart.map((item) => item.name),
        cartItems: cart.map((item) => item._id),
        menuItems: cart.map((item) => item.menuItemId),
      };
      console.log(paymentInfo);
      //----Send---information----By----Database-------
      fetch("http://localhost:5000/payments", {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(paymentInfo),
      })
        .then((res) => res.json())
        .then((data) => {
          navigate('/order')
          console.log(data);
          if (data.insertedId) {
            Swal.fire({
              position: "center",
              icon: "success",
              title: "Your Payment Success",
              showConfirmButton: false,
              timer: 1500,
            });
          }
        });
    }
  };
  return (
    <div className="flex px-4 flex-col sm:flex-row justify-start items-start gap-8">
      {/*-------------Left-------Side---------*/}
      <div className="md:w-1/2 w-full space-y-3">
        <h4 className="text-4xl text-black">Order Summary</h4>
        <p className="text-2xl text-black py-3">Total Prices: $ {price}</p>
        <p className="text-2xl text-black">Number of Items: {cart.length}</p>
      </div>
      {/*-------------Right-------Side---------*/}
      <div className="md:w-1/2 w-full space-y-3 max-w-sm bg-white shrink-0 shadow-2xl px-4 py-8 border-y-2 border-y-sky-700 border-x-2 border-x-[#fa4604]  ">
        <h4 className="text-3xl text-black">Process your Payment!</h4>
        <h3 className="text-2xl text-black py-3">Creadit/Debit Card!</h3>
        {/*--------Stripe-------Form---------*/}
        <form onSubmit={handleSubmit} className="p-5">
          <CardElement
            options={{
              style: {
                base: {
                  fontSize: "16px",
                  color: "#424770",
                  "::placeholder": {
                    color: "#aab7c4",
                  },
                },
                invalid: {
                  color: "#9e2146",
                },
              },
            }}
          />
          <button
            type="submit"
            disabled={!stripe}
            className="btn border-0 w-full bg-sky-800  py-2 px-6 text-2xl text-white rounded-lg mt-8"
          >
            Pay
          </button>
        </form>
        {cardError ? (
          <p className="text-[#ff004f] italic text-sm">{cardError}</p>
        ) : (
          ""
        )}

        {/*----------Paypal----------*/}
        <div className="mt-5 text-center">
          <hr className=" h-1 bg-sky-700" />
          <div className="flex items-center justify-center  p-5">
            <button
              type="submit"
              className="btn bg-[#fa4604] w-full border-0 text-2xl text-white rounded-lg"
            >
              <FaPaypal />
              PayPal
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CheckoutForm;
