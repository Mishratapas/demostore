import {Link} from "react-router-dom";

const ProductContent = ({product}) => {
  return (
    <>
      <div key={product.id}>
        <Link to={`/products/${product.id}`} className="meta-container">
          <img src={product.image} alt="" />
          <p>{product.title.substring(0, 14)}</p>
          <p>₹{Math.ceil(product.price * 70)}</p>
        </Link>
      </div>
    </>
  );
};

export default ProductContent;
