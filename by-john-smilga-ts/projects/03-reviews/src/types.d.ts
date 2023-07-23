export type PersonType = {
  id: number;
  name: string;
  job: string;
  image: string;
  text: string;
};

export type DataType = {
  person: PersonType[];
};
