function ProfileTab() {
  return (
    <div className="profileTab">
      <div className="profileImage">
        <img className="pic1" src="src\assets\OIP.webp" alt="profile" />
      </div>
      <div className="profileText">
        <h1 style={{ marginBottom: "0px" }}>Piyush Gupta</h1>
        <h2 style={{ fontSize: "15px", marginTop: "0px", paddingTop: "0px" }}>
          Aspiring Software Developer
          <br />
          <br />
          <br />
          <p className="textBelowName">
            <img
              src="src\assets\icons8-location-50.png"
              style={{ height: "12px", marginRight: "5px" }}
            />
            Faridabad, Haryana
            <br />
            <br />
            <img
              src="src\assets\icons8-graduation-cap-30.png"
              style={{ height: "12px", marginRight: "5px" }}
            />
            G.L. Bajaj Institute of Technology & Management, Greater Noida,
            Uttar Pradesh - 201306
            <br />
            <br />
            <img
              src="src\assets\icons8-linkedin-50.png"
              style={{ height: "12px", marginRight: "5px" }}
            />
            <a href="https://www.linkedin.com/in/piyush-gupta-3a96b9292/">
              LinkedIn
            </a>
            <br />
            <br />
            <img
              src="src\assets\icons8-mail-50.png"
              style={{ height: "12px", marginRight: "5px" }}
            />
            <a href="mailto:gupta.piyush1005@gmail.com">
              gupta.piyush1005@gmail.com
            </a>
            <br />
            <br />
            <img
              src="src\assets\icons8-call-50.png"
              style={{ height: "12px", marginRight: "5px" }}
            />
            <a href="tel:+917982971165">Contact Me</a>
          </p>
        </h2>
      </div>
      <footer className="profileFooter">© 2025 Vibe coded by me</footer>
    </div>
  );
}

export default ProfileTab;
