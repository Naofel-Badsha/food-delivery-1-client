import axios from "axios";

const axiosPublic = axios.create({
    baseURL:'https://food-delivery-1-server.vercel.app',
})

const useAxiosPublic = () => {
  return axiosPublic
}
export default useAxiosPublic;