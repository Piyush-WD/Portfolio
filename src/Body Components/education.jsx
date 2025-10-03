import {
  BrowserRouter,
  Routes,
  Route,
  Link,
  useNavigate,
  Outlet,
} from "react-router-dom";

function Education() {
  const navigate = useNavigate();

  function redirectHome() {
    navigate("/");
  }
  return (
    <div className="Tabs">
      <p>
        <button onClick={redirectHome}>{"<"} About Me</button>
      </p>
      <h2>Bachelors of Technology</h2>
      <h3>2023-present</h3>
      <p>
        Currently pursuing B.Tech in Computer Science & Engineering from Dr.
        A.P.J. Abdul Kalam Technical University
      </p>
      <p>CGPA : 8</p>
      <br />
      <h2>Class 12th</h2>
      <h3>2023</h3>
      <p>
        CBSE
        <br />
        <p>Percentage: 90%</p>
      </p>
      <br />
      <h2>Class 10th</h2>
      <h3>2021</h3>
      <p>
        CBSE
        <br />
        <p>Percentage: 93%</p>
      </p>
    </div>
  );
}

export default Education;
