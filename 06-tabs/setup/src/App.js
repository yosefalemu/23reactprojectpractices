import React, { useState, useEffect } from "react";
import { FaAngleDoubleRight } from "react-icons/fa";
// ATTENTION!!!!!!!!!!
// I SWITCHED TO PERMANENT DOMAIN
const url = "https://course-api.com/react-tabs-project";
function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [jobs, setJobs] = useState([]);
  const [value, setValue] = useState(0);
  const [intial, setIntial] = useState(true);

  const fetchJobs = async () => {
    const response = await fetch(url);
    const newJobs = await response.json();
    console.log(newJobs);
    setJobs(newJobs);
    setIsLoading(false);
  };
  useEffect(() => {
    fetchJobs();
  }, []);
  if (isLoading) {
    return (
      <section className="section loading">
        <h1>Loading ...</h1>
      </section>
    );
  }
  const { company, dates, duties, title } = jobs[value];

  return (
    <section className="section">
      <div className="title">
        <h2>experience</h2>
        <div className="underline"></div>
      </div>
      <div className="jobs-center">
        <div className="btn-container">
          {jobs.map((item, index) => {
            return (
              <button
                key={item.id}
                onClick={() => setValue(index)}
                className={`job-btn ${index == value && "active-btn"}`}
              >
                {item.company}
              </button>
            );
          })}
        </div>
        <article className="job-info">
          <h3>{title}</h3>
          <h4>{company}</h4>
          <p className="job-date">{dates}</p>

          <div className="job-desc">
            {intial && (
              <>
                <FaAngleDoubleRight className="job-icon"></FaAngleDoubleRight>
                <p>{intial && duties[0]}</p>
              </>
            )}
          </div>

          {intial ||
            duties.map((duty) => {
              return (
                <div className="job-desc">
                  <FaAngleDoubleRight className="job-icon"></FaAngleDoubleRight>
                  <p>{duty}</p>
                </div>
              );
            })}
        </article>
      </div>
      <button className="btn" type="button" onClick={() => setIntial(!intial)}>
        more info
      </button>
    </section>
  );
}

export default App;
