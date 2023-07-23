export type TourType = {
  id: string;
  name: string;
  info: string;
  image: string;
  price: number;
  removeTour: (arg0: string) => void;
};
export type ToursProps = {
  tours: TourType[];
  removeTour: (arg0: string) => void;
};
