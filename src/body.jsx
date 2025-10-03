import { useState } from "react";
import {
  BrowserRouter,
  Routes,
  Route,
  Link,
  useNavigate,
  Outlet,
} from "react-router-dom";
import Education from "./Body Components/education";
import Achievements from "./Body Components/achievements";
import Projects from "./Body Components/projects";
import Skills from "./Body Components/skills";

function Layout() {
  return (
    <div className="body">
      <div className="bodyMainHeading">
        <h2>Hello!</h2>
        <h1>Welcome to my Portfolio</h1>
        <hr style={{ height: "3px" }} />
      </div>
      <div className="navBar">
        <div>
          <h3>
            <Link to="/education">Education</Link>
          </h3>
        </div>
        <div>
          <h3>
            <Link to="/skills">Skills</Link>
          </h3>
        </div>
        <div>
          <h3>
            <Link to="/projects">Projects</Link>
          </h3>
        </div>
        {/* <div>
          <h3>
            <Link to="/achievements">Achievements</Link>
          </h3>
        </div> */}
      </div>
      <div className="mainBody">
        <Outlet />
      </div>
    </div>
  );
}

function Body() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="/education" element={<Education />}></Route>
          <Route path="/skills" element={<Skills />}></Route>
          <Route path="/projects" element={<Projects />}></Route>
          <Route path="/achievements" element={<Achievements />}></Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default Body;
