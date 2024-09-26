import { Elements } from "@stripe/react-stripe-js";
import CheckoutForm from "./CheckoutForm";
import { loadStripe } from "@stripe/stripe-js";
import useCart from "../../../Hooks/useCart";

const stripePromise = loadStripe(import.meta.env.VITE_Stripe_PK);

const Payment = () => {
  const [cart] = useCart();
  //console.log(cart);
  //------Calculet------the-----calculet-----price-------
  const cartTotal = cart.reduce((sum, item) => sum + item.price, 0);
  //console.log(cartTotal)
  const totalPrice = parseFloat(cartTotal.toFixed(0));
  //console.log(totalPrice);

  return (
    <div className="container m-auto">
      {/*--------------Heading-----------*/}
      <div className="text-center">
        <h2 className="text-4xl text-black md:text-5xl font-bold md:leading-tight leading-tight py-20">
          Paym<span className="text-[#fa4604]">ent💰</span>
        </h2>
      </div>

      <div>
        <Elements stripe={stripePromise}>
          <CheckoutForm price={totalPrice} cart={cart} />
        </Elements>
      </div>
    </div>
  );
};

export default Payment;
