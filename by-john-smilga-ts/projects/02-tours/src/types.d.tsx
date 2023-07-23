export type TourType = {
  id: string;
  name: string;
  info: string;
  image: string;
  price: number;
};
export type ToursProps = {
  tours: TourType[];
};
