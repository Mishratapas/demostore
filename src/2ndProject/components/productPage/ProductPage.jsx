import {AiOutlineArrowRight} from "react-icons/ai";
import {useNavigate} from "react-router-dom";
import {bags} from "../../data";

const ProductPage = () => {
  const navigate = useNavigate();

  return (
    <div className="product-container">
      <div className="title-container">
        <h4>Products</h4>
      </div>
      <div className="products">
        {bags.map((item) => {
          return (
            <div className="product" key={item.id}>
              <div className="image">
                <img src={item.image} alt="" />
              </div>
              <h4>{item.title}</h4>
            </div>
          );
        })}
      </div>
      <div className="gotoProducts" onClick={() => navigate("/products")}>
        <button>
          Go to Product
          <AiOutlineArrowRight />
        </button>
      </div>
    </div>
  );
};

export default ProductPage;
