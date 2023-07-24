import Duties from "./Duties";
import { JobInfoProps } from "./types";

const JobInfo: React.FC<JobInfoProps> = ({ jobs }) => {
  const { company, dates, duties, title } = jobs[0];

  return (
    <article className="job-info">
      <h3>{title}</h3>
      <span className="job-company">{company}</span>
      <p className="job-date">{dates}</p>
      <Duties duties={duties} />
    </article>
  );
};
export default JobInfo;
