import { useState, useEffect } from "react";

export interface FetchResponseData {
  avatar_url: string;
  name: string;
  company: string;
  bio: string;
}

const useFetch = (url: string) => {
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [isError, setIsError] = useState<boolean>(false);
  const [data, setData] = useState<FetchResponseData | null>(null); // Use the 'FetchResponseData' interface here

  useEffect(() => {
    const fetchData = async () => {
      try {
        const resp = await fetch(url);

        if (!resp.ok) {
          setIsError(true);
          setIsLoading(false);
          return;
        }

        // Modify the response parsing based on the actual API response structure
        // For example, if the API returns JSON data, use 'await resp.json()'
        const response: FetchResponseData = await resp.json();
        setData(response);
      } catch (error) {
        setIsError(true);
        // console.log(error);
      }

      setIsLoading(false);
    };

    fetchData();
  }, [url]); // Make sure to include 'url' in the dependency array to avoid potential issues

  return { isLoading, isError, data };
};

export default useFetch;
