import {
  BrowserRouter,
  Routes,
  Route,
  Link,
  useNavigate,
  Outlet,
} from "react-router-dom";

function Projects() {
  const navigate = useNavigate();

  function redirectHome() {
    navigate("/");
  }

  return (
    <div className="Tabs">
      <p>
        <button onClick={redirectHome}>{"<"} Go Home</button>
      </p>
      <h2>Diabetes Prediction App</h2>
      <p>
        The Diabetes Prediction Website is a web-based platform designed to
        assess an individual's risk of developing diabetes. The platform
        utilizes user-provided health data, such as age, BMI, blood glucose
        levels, Insulin levels, and number of Pregnancies, to deliver accurate,
        personalized risk assessments.
        <br />
      </p>
      <h3>Technologies used:</h3>
      <ul>
        <li>HTML, CSS</li>
        <li>Python</li>
        <li>Flask</li>
      </ul>
      <img
        src="src\assets\485225359-dc876769-e93d-4c7d-a633-96d36db0c66d.png"
        style={{ height: "400px" }}
      />
      <p>
        Check out the live app here:
        <a href="https://diabetes-prediction-app-ea8v.onrender.com">
          https://diabetes-prediction-app-ea8v.onrender.com
        </a>
      </p>
    </div>
  );
}

export default Projects;
