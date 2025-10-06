import image from "./assets/OIP.webp";
import image2 from "./assets/WhatsApp Image 2025-10-03 at 21.13.30.jpeg";
import image3 from "./assets/icons8-location-50.png";
import image4 from "./assets/icons8-graduation-cap-30.png";
import image5 from "./assets/icons8-linkedin-50.png";
import image6 from "./assets/icons8-mail-50.png";
import image7 from "./assets/icons8-call-50.png";

function ProfileTab() {
  return (
    <div className="profileTab">
      <div className="profileHeader">
        <img className="banner" src={image} alt="banner" />

        {/* your round profile pic */}
        <img className="profilePic" src={image2} alt="profile" />
      </div>

      <div className="profileText">
        <h1 style={{ marginBottom: "0px" }}>Piyush Gupta</h1>
        <h2 style={{ fontSize: "15px", marginTop: "0px", paddingTop: "0px" }}>
          Aspiring Software Developer
          <br />
          <br />
          <br />
          <p className="textBelowName">
            <img src={image3} style={{ height: "12px", marginRight: "5px" }} />
            Faridabad, Haryana
            <br />
            <br />
            <img src={image4} style={{ height: "12px", marginRight: "5px" }} />
            G.L. Bajaj Institute of Technology & Management, Greater Noida,
            Uttar Pradesh - 201306
            <br />
            <br />
            <img src={image5} style={{ height: "12px", marginRight: "5px" }} />
            <a href="https://www.linkedin.com/in/piyush-gupta-3a96b9292/">
              LinkedIn
            </a>
            <br />
            <br />
            <img src={image6} style={{ height: "12px", marginRight: "5px" }} />
            <a href="mailto:gupta.piyush1005@gmail.com">
              gupta.piyush1005@gmail.com
            </a>
            <br />
            <br />
            <img src={image7} style={{ height: "12px", marginRight: "5px" }} />
            <a href="tel:+917982971165">Contact Me</a>
          </p>
        </h2>
      </div>
      {/* <footer className="profileFooter">© 2025 Vibe coded by me</footer> */}
    </div>
  );
}

export default ProfileTab;
