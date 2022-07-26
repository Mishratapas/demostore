import all from "../../data/images/dropdown/all.png";
import mens from "../../data/images/dropdown/mens.png";
import womens from "../../data/images/dropdown/women.png";
import jewelery from "../../data/images/dropdown/jewelery.png";
import electronics from "../../data/images/dropdown/electronics.png";
import bag from "../../data/images/dropdown/bag.png";
import {useState} from "react";

function Category() {
  const [showMore, setShowMore] = useState(false);

  const categories = [
    {
      image: all,
      title: "All",
      description: "3M Items",
    },
    {
      image: mens,
      title: "Mens",
      description: "1M Items",
    },
    {
      image: womens,
      title: "Womens",
      description: "1.2M Items",
    },
    {
      image: jewelery,
      title: "Jewelery",
      description: "751K Items",
    },
    {
      image: electronics,
      title: "Electronics",
      description: "1.0M Items",
    },
    {
      image: bag,
      title: "Bag",
      description: "88K Items",
    },
  ];

  return (
    <div className="categories-container mx-3">
      <div className="container">
        <div className="title-container">
          <h4>Categories</h4>
        </div>
        {showMore ? (
          <div className="categories">
            {categories.map(({image, title, description}, index) => {
              return (
                <div className="category" key={index}>
                  <img src={image} alt="category" />
                  <h4>{title}</h4>
                  <p>{description}</p>
                </div>
              );
            })}
          </div>
        ) : (
          <div className="categories">
            {categories
              .slice(0, 3)
              .map(({image, title, description}, index) => {
                return (
                  <div className="category" key={index}>
                    <img src={image} alt="category" />
                    <h4>{title}</h4>
                    <p>{description}</p>
                  </div>
                );
              })}
          </div>
        )}
        {/* <div className="categories">
          {categories.map(({image, title, description}, index) => {
            return (
              <div className="category" key={index}>
                <img src={image} alt="category" />
                <h4>{title}</h4>
                <p>{description}</p>
              </div>
            );
          })}
        </div> */}
        <button className="button" onClick={() => setShowMore(!showMore)}>
          {showMore ? "Show Less" : "Show More"}
        </button>
      </div>
    </div>
  );
}

export default Category;
