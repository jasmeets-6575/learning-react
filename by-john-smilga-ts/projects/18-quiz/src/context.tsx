import axios from "axios";
import React, { useContext, ReactElement, useState, useEffect } from "react";

const table = {
  sports: 21,
  history: 23,
  politics: 24,
};

const API_ENDPOINT = "https://opentdb.com/api.php?";

const url = "";

const tempUrl =
  "https://opentdb.com/api.php?amount=10&category=21&difficulty=easy&type=multiple";
type IAppState = {
  waiting: boolean;
  loading: boolean;
  questions: any[];
  index: number;
  correct: number;
  error: boolean;
  isModalOpen: boolean;
};
const AppContext = React.createContext<IAppState>({} as IAppState);

type ChildrenType = { children?: ReactElement | ReactElement[] };
const AppProvider = ({ children }: ChildrenType): ReactElement => {
  const [waiting, setWaiting] = useState<boolean>(true);
  const [loading, setLoading] = useState<boolean>(false);
  const [questions, setQuestions] = useState([]);
  const [index, setIndex] = useState<number>(0);
  const [correct, setCorrect] = useState<number>(0);
  const [error, setError] = useState<boolean>(false);
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

  const fetchQuestions = async (url: string) => {
    setLoading(true);
    setWaiting(false);
    const response = await axios(url).catch((err) => console.log(err));
    if (response) {
      const data = response.data.results;
      if (data.length > 0) {
        setQuestions(data);
        setLoading(false);
        setWaiting(false);
        setError(false);
      } else {
        setWaiting(true);
        setError(true);
      }
    } else {
      setWaiting(true);
    }
  };
  useEffect(() => {
    fetchQuestions(tempUrl);
  }, []);
  return (
    <AppContext.Provider
      value={{
        waiting,
        loading,
        questions,
        index,
        correct,
        error,
        isModalOpen,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppContext, AppProvider };
