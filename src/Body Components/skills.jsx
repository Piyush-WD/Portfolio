import {
  BrowserRouter,
  Routes,
  Route,
  Link,
  useNavigate,
  Outlet,
} from "react-router-dom";
import image from "../assets/cpp_logo.png";
import image2 from "../assets/R.png";

function Skills() {
  const navigate = useNavigate();

  function redirectHome() {
    navigate("/");
  }
  return (
    <div className="Tabs">
      <p>
        <button onClick={redirectHome}>{"<"} About Me</button>
      </p>
      <h2>Data Structures & Algorithms</h2>
      <h3>
        <img src={image} style={{ height: "50px" }}></img>
      </h3>
      <br />
      <h2>Web Development</h2>
      <h3>
        <img src={image2} style={{ height: "50px" }}></img>
      </h3>
      <br />
      <h2>Course Subjects</h2>
      <ul>
        <li>Database Management System</li>
        <li>Computer Organization</li>
        <li>Object Oriented Programming</li>
      </ul>
    </div>
  );
}

export default Skills;
