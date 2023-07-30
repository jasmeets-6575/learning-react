import { useEffect } from "react";
import axios, { AxiosError, AxiosResponse } from "axios";

// Assuming authFetch is a custom function that performs authenticated requests
// You may need to define its type separately if it's not part of axios typings.
declare const authFetch: (url: string) => Promise<any>;

interface Product {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
}

interface RandomUserResponse {
  results: Array<{
    name: {
      first: string;
      last: string;
    };
    email: string;
    picture: {
      large: string;
      medium: string;
      thumbnail: string;
    };
  }>;
}

const randomUserUrl = "https://randomuser.me/api";

const CustomInstance: React.FC = () => {
  const fetchData = async () => {
    try {
      const response1: AxiosResponse<Product[]> = await authFetch(
        "/react-store-products"
      );
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

  return <h2 className="text-center">custom instance</h2>;
};

export default CustomInstance;
