import { useEffect, useState } from "react";
import { JobsType } from "./types";
import BtnContainer from "./BtnContainer";
import JobInfo from "./JobInfo";

const url = "https://course-api.com/react-tabs-project";

function App() {
  const [loading, setLoading] = useState<boolean>(true);
  const [jobs, setJobs] = useState<JobsType[]>([]);
  const [currentItem, setCurrentItem] = useState<number>(0);

  const fetchJobs = async () => {
    try {
      const response = await fetch(url);
      const newJobs = await response.json();
      setJobs(newJobs);
      setLoading(false);
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  };
  useEffect(() => {
    fetchJobs();
  }, []);
  if (loading) {
    return (
      <section className="jobs-center">
        <div className="loading"></div>
      </section>
    );
  }
  return (
    <section className="jobs-center">
      <BtnContainer
        jobs={jobs}
        currentItem={currentItem}
        setCurrentItem={setCurrentItem}
      />
      <JobInfo jobs={jobs} />
    </section>
  );
}

export default App;
