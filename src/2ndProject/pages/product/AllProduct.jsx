import {memo, useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux";

import {getData} from "../../services/dataSlice";
import useRender from "../../hooks/useRender";
import {subTotal} from "../../services/cartSlice";

const AllProduct = () => {
  const dispatch = useDispatch();

  const cart = useSelector((state) => state.cart);

  const [
    renderAll,
    renderMens,
    renderWomen,
    renderJewelery,
    renderElectronics,
    renderBags,
  ] = useRender();

  const [showAll, setShowAll] = useState(false);
  const [showMens, setShowMens] = useState(false);
  const [showWomen, setShowWomen] = useState(false);
  const [showJewe, setShowJewe] = useState(false);
  const [showEle, setShowEle] = useState(false);
  const [showBag, setShowBag] = useState(false);

  useEffect(() => {
    dispatch(getData());
    setShowAll(true);
  }, [dispatch]);

  useEffect(() => {
    dispatch(subTotal());
  }, [dispatch, cart]);

  const handleAll = () => {
    setShowWomen(false);
    setShowJewe(false);
    setShowEle(false);
    setShowBag(false);
    setShowMens(false);
    setShowAll(true);
  };

  const handleMens = () => {
    setShowAll(false);
    setShowWomen(false);
    setShowJewe(false);
    setShowEle(false);
    setShowBag(false);
    setShowMens(true);
  };

  const handleWomen = () => {
    setShowAll(false);
    setShowMens(false);
    setShowJewe(false);
    setShowEle(false);
    setShowBag(false);
    setShowWomen(true);
  };

  const handleElectronics = () => {
    setShowAll(false);
    setShowMens(false);
    setShowJewe(false);
    setShowBag(false);
    setShowWomen(false);
    setShowEle(true);
  };

  const handleJewelery = () => {
    setShowAll(false);
    setShowMens(false);
    setShowBag(false);
    setShowWomen(false);
    setShowEle(false);
    setShowJewe(true);
  };

  const handleBags = () => {
    setShowAll(false);
    setShowMens(false);
    setShowWomen(false);
    setShowEle(false);
    setShowJewe(false);
    setShowBag(true);
  };

  return (
    <div className="allproducts-container py-3 mx-3">
      <div className="buttons">
        <button onClick={() => handleAll()}>All</button>
        <button onClick={() => handleMens()}>Mens</button>
        <button onClick={() => handleWomen()}>Womens</button>
        <button onClick={() => handleElectronics()}>Electronics</button>
        <button onClick={() => handleJewelery()}>Jewelery</button>
        <button onClick={() => handleBags()}>Bags</button>
      </div>
      <h4>Products</h4>
      <div className="second-container">
        {showAll && renderAll}
        {showMens && renderMens}
        {showWomen && renderWomen}
        {showEle && renderElectronics}
        {showJewe && renderJewelery}
        {showBag && renderBags}
      </div>
    </div>
  );
};

export default memo(AllProduct);
