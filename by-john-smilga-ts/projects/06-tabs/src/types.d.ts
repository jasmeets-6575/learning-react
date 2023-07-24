export type JobsType = {
  id: string;
  order: number;
  title: string;
  dates: string;
  duties: string[];
  company: string;
};

export type JobInfoProps = {
  jobs: JobsType[];
};

export interface DutiesProps {
  duties: string[];
}

export type BtnContainerProps = {
  jobs: JobsType[];
  currentItem: number;
  setCurrentItem: (index: number) => void;
};
