import { useQuery } from "@tanstack/react-query";

const url =
  "https://api.unsplash.com/search/photos?client_id=v-iPJA8sHq8yjEUd7pXPkDZ-PKHvl4RnfxfrJ_M8RMM&query=office";

const Gallery = () => {
  const response = useQuery({
    queryKey: ["images"],
    queryFn: async () => {
      const result = await axios.get(url);

      return result.data;
    },
  });
  return <h2>Gallery</h2>;
};
export default Gallery;
