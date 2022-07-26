import {memo, useEffect} from "react";
import {useSelector, useDispatch} from "react-redux";
import {useNavigate, useParams} from "react-router-dom";
import {AiFillStar} from "react-icons/ai";
import {RiArrowGoBackFill} from "react-icons/ri";

import {Loading} from "../../components";
import {getDetail, removeDetail} from "../../services/dataSlice";
import {addToCart, subTotal} from "../../services/cartSlice";

const ProductDetail = () => {
  const dispatch = useDispatch();
  const {id} = useParams();
  const {loading, detail} = useSelector((state) => state.data);
  const cart = useSelector((state) => state.cart);

  useEffect(() => {
    dispatch(getDetail(id));
    return () => {
      dispatch(removeDetail());
    };
  }, [dispatch, id]);

  useEffect(() => {
    dispatch(subTotal());
  }, [dispatch, cart]);

  let rating = Math.random() * 10;
  if (rating > 5) {
    rating = 2.4;
  }

  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/products");
    window.location.reload();
  };
  const handleAddToCart = (product) => {
    dispatch(addToCart(product));
  };

  return (
    <div className="detail-container">
      {loading ? (
        <Loading />
      ) : (
        <>
          <div className="detail-header">
            <span>{detail.category}</span>
            <span onClick={() => handleClick()}>
              <RiArrowGoBackFill />
            </span>
          </div>
          <div className="left-right-content">
            <div className="left mx-3">
              <img src={detail.image} alt={detail.title} />
            </div>
            <div className="right mx-3">
              <h4>{detail.title}</h4>
              <span>₹{Math.floor(detail.price * 70)}</span>
              <div className="rating-container">
                <span>rating:</span>
                <div className="rating-content">
                  <p>
                    {rating.toString().slice(0, 3)}
                    <AiFillStar style={{color: "#e1fa00"}} />
                  </p>
                </div>
              </div>
              <p>{detail.description}</p>
              <span>instocks: {Math.trunc(Math.random() * 100)}</span>
              <div className="button-container">
                <button onClick={() => handleAddToCart(detail)}>
                  Add to Cart
                </button>
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default memo(ProductDetail);
