import {Carousel} from "react-responsive-carousel";

import mens from "../../data/images/dropdown/mens.png";
import womens from "../../data/images/dropdown/women.png";
import jewelery from "../../data/images/dropdown/jewelery.png";
import electronics from "../../data/images/dropdown/electronics.png";
import bag from "../../data/images/dropdown/bag.png";

const Slider = () => {
  return (
    <div className="slider-container mx-3">
      <div className="title-container">
        <h4>Promotions</h4>
      </div>
      <Carousel
        className="carousel"
        ariaLabel={"string"}
        autoPlay={true}
        infiniteLoop={true}
        interval={2000}
        showIndicators={false}
        showArrows={false}
        showStatus={false}
        showThumbs={false}
      >
        <div>
          <img src={mens} alt="" />
          <span>Mens Clothing</span>
        </div>
        <div>
          <img src={womens} alt="" />
          <span>Women's Clothing</span>
        </div>
        <div>
          <img src={jewelery} alt="" />
          <span>Jewelery</span>
        </div>
        <div>
          <img src={electronics} alt="" />
          <span>Electronics</span>
        </div>
        <div>
          <img src={bag} alt="" />
          <span>Bags</span>
        </div>
      </Carousel>
    </div>
  );
};

export default Slider;
