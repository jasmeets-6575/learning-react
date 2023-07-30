import { useEffect } from "react";
import axios, { AxiosError, AxiosResponse } from "axios";

const productsUrl = "https://course-api.com/react-store-products";
const randomUserUrl = "https://randomuser.me/api";

const GlobalInstance: React.FC = () => {
  const fetchData = async () => {
    try {
      const response1: AxiosResponse<Product[]> = await axios(productsUrl);
      const response2: AxiosResponse<RandomUserResponse> = await axios(
        randomUserUrl
      );

      const data1: Product[] = response1.data;
      const data2: RandomUserResponse = response2.data;

      console.log(data1);
      console.log(data2);
    } catch (error) {
      const axiosError = error as AxiosError;
      console.log(axiosError.response);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return <h2 className="text-center">global instance</h2>;
};

export default GlobalInstance;
