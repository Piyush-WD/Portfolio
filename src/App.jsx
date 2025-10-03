import { useState, useEffect } from "react";
import ProfileTab from "./profileTab";
import Body from "./body";

function App() {
  return (
    <div className="container" style={{ backgroundColor: "#0D1117" }}>
      <ProfileTab />
      <Body />
    </div>
  );
}

export default App;
