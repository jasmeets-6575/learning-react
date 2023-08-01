import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { useGlobalContext } from "./context";

const url = `https://api.unsplash.com/search/photos?client_id=${
  import.meta.env.VITE_API_KEY
}`;

type ImageData = {
  id: string;
  urls: {
    regular: string;
  };
  alt_description: string;
};

type ApiResponse = {
  results: ImageData[];
};

const Gallery = () => {
  const { searchTerm } = useGlobalContext();
  const response = useQuery<ApiResponse>({
    queryKey: ["images", searchTerm],
    queryFn: async () => {
      const result = await axios.get<ApiResponse>(`${url}&query=${searchTerm}`);
      return result.data;
    },
  });

  const results = response.data?.results ?? [];
  if (results.length < 1) {
    return (
      <section className="image-container">
        <h4>No results found...</h4>
      </section>
    );
  }

  return (
    <section className="image-container">
      {results.map((item) => {
        const url = item?.urls?.regular;
        return (
          <img
            src={url}
            key={item.id}
            alt={item.alt_description}
            className="img"
          ></img>
        );
      })}
    </section>
  );
};

export default Gallery;
