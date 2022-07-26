import {BsSearch} from "react-icons/bs";
import header from "../../data/images/header.jpg";

const Header = () => {
  return (
    <div className="home mx-3">
      <div className="container">
        <div className="title-container">
          <h2>Browse products for your needs</h2>
          <div className="input-container">
            <input type="text" placeholder="search" />
            <div className="icon">
              <BsSearch />
            </div>
          </div>
        </div>
        <div className="extra-image">
          <img src={header} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Header;
