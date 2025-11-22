
import axios from "axios";

const axiosSecure = axios.create({
    baseURL:'https://food-delivery-1-server.vercel.app',
})

const useAxioseSecure = () => {
    return axiosSecure
};

export default useAxioseSecure;