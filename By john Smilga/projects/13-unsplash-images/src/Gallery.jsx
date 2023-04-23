import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { useGlobalContext } from "./context";

const url =
  "https://api.unsplash.com/search/photos?client_id=v-iPJA8sHq8yjEUd7pXPkDZ-PKHvl4RnfxfrJ_M8RMM";

const Gallery = () => {
  const { searchTerm } = useGlobalContext();
  const response = useQuery({
    queryKey: ["images",searchTerm],
    queryFn: async () => {
      const result = await axios.get(`${url}&query=${searchTerm}`);

      return result.data;
    },
  });
  if (response.isLoading) {
    return (
      <section className="image-container">
        <h3>Loading...</h3>
      </section>
    );
  }
  if (response.isError) {
    return (
      <section className="image-container">
        <h3>There was an Error...</h3>
      </section>
    );
  }

  const results = response.data.results;
  if (results.length < 1) {
    return (
      <section className="image-container">
        <h3>No results found... </h3>
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
