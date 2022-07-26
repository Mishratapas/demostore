// import {
//   BsFacebook,
//   BsInstagram,
//   BsLinkedin,
//   BsTwitter,
//   BsGoogle,
// } from "react-icons/bs";
import {
  AiFillFacebook,
  AiFillInstagram,
  AiFillGithub,
  AiFillGoogleCircle,
  AiFillTwitterCircle,
} from "react-icons/ai";

const Footer = () => {
  const data = [
    {
      type: "Product",
      subTypes: [
        "Landing Page",
        "Features",
        "Documentation",
        "Referral Program",
        "Pricing",
      ],
    },
    {
      type: "Services",
      subTypes: [
        "Documentation",
        "Design",
        "Themes",
        "Illustrations",
        "UI Kit",
      ],
    },
    {
      type: "Company",
      subTypes: ["About", "Terms", "Privacy Policy", "Careers"],
    },
    {
      type: "More",
      subTypes: ["Documentation", "License", "Changelog"],
    },
  ];

  const socialLinks = [
    <AiFillFacebook />,
    <AiFillInstagram />,
    <AiFillGithub />,
    <AiFillGoogleCircle />,
    <AiFillTwitterCircle />,
  ];

  return (
    <footer className="mx-3 py-3">
      <div className="brand-container">
        <div className="brand">
          <span>demostore</span>
        </div>
        <p className="description">
          Build a modern and create a website with reactjs
        </p>
        <ul className="social-links">
          {socialLinks.map((link, index) => (
            <li key={index}>{link}</li>
          ))}
        </ul>
      </div>
      <div className="links">
        {data.map(({type, subTypes}, index) => (
          <div className="link" key={index}>
            <h5 className="title">{type}</h5>
            <ul>
              {subTypes.map((subtype, index2) => (
                <li key={index2}>
                  <a href="#">{subtype}</a>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </footer>
  );
};

export default Footer;
