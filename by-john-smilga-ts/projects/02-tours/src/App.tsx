import React, { useState, useEffect } from "react";
import Loading from "./Loading";
import Tours from "./Tours";
import { TourType } from "./types.d";

const url = "https://course-api.com/react-tours-project";

function App() {
  const [loading, setLoading] = useState<boolean>(true);
  const [tours, setTours] = useState<TourType[]>([]);

  const fetchTours = async () => {
    setLoading(true);
    try {
      const response = await fetch(url);
      const toursData = await response.json();
      setLoading(false);
      setTours(toursData);
    } catch (error) {
      setLoading(false);
      console.log(error);
    }
  };
  useEffect(() => {
    fetchTours();
  }, []);
  if (loading) {
    return (
      <main>
        <Loading />
      </main>
    );
  }
  if (tours.length === 0) {
    return (
      <main>
        <div className="title">
          <h2>no tours left</h2>
          <button className="btn" onClick={() => fetchTours()}>
            refresh
          </button>
        </div>
      </main>
    );
  }
  return <h1>Hello World</h1>;
}

export default App;
