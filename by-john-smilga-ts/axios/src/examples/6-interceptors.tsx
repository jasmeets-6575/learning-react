import { useEffect } from "react";
import authFetch, { AxiosResponse } from "../axios/interceptors";
import { AxiosError } from "axios";

interface Product {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
}

const url = "https://course-api.com/react-store-products";

const Interceptors: React.FC = () => {
  const fetchData = async () => {
    try {
      const response: AxiosResponse<Product[]> = await authFetch(url);
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

  return <h2 className="text-center">interceptors</h2>;
};

export default Interceptors;
