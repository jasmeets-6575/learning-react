import { useState } from "react";
import axios, { AxiosResponse, AxiosError } from "axios";

interface DadJokeResponse {
  joke: string;
}

const url = "https://icanhazdadjoke.com/";

const Headers: React.FC = () => {
  const [joke, setJoke] = useState<string>("random dad joke");

  const fetchDadJoke = async () => {
    try {
      const response: AxiosResponse<DadJokeResponse> = await axios(url, {
        headers: {
          Accept: "application/json",
        },
      });
      setJoke(response.data.joke);
    } catch (error) {
      const axiosError = error as AxiosError;
      console.log(axiosError.response);
    }
  };

  return (
    <section className="section text-center">
      <button className="btn" onClick={fetchDadJoke}>
        random joke
      </button>
      <p className="dad-joke">{joke}</p>
    </section>
  );
};

export default Headers;
