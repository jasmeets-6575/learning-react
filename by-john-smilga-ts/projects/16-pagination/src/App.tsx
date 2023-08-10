import { useState, useEffect } from "react";
import { useFetch } from "./useFetch";
import Follower from "./Follower";

export interface IFollower {
  id: number;
  avatar_url: string;
  html_url: string;
  login: string;
}

function App() {
  const { loading, data } = useFetch();
  const [page, setPage] = useState(0);
  const [followers, setFollowers] = useState([]);

  return (
    <main>
      <div className="section-title">
        <h1>{loading ? "loading..." : "pagination"}</h1>
        <div className="underline"></div>
      </div>
      <section className="followers">
        <div className="container">
          {followers.map((follower: IFollower) => {
            return <Follower key={follower.id} {...follower} />;
          })}
        </div>
        {!loading && (
          <div className="btn-container">
            <button className="prev-btn">prev</button>
            {data.map((item, index) => {
              return (
                <button
                  key={index}
                  className={`page-btn ${index === page ? "active-btn" : null}`}
                >
                  {index + 1}
                </button>
              );
            })}
            <button className="next-btn">next</button>
          </div>
        )}
      </section>
    </main>
  );
}

export default App;
