import { useEffect } from "react";
import axios, { AxiosError, AxiosResponse } from "axios";

interface Product {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
}

const url = "https://course-api.com/react-store-products";

const FirstRequest: React.FC = () => {
  const fetchData = async () => {
    try {
      const response: AxiosResponse = await axios(url);
      const data: Product[] = response.data;
      console.log(data);
    } catch (error) {
      const axiosError = error as AxiosError;
      console.log(axiosError.response);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return <h2 className="text-center">first request</h2>;
};

export default FirstRequest;
