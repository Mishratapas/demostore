import {useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {Route, Routes} from "react-router-dom";
import scrollReveal from "scrollreveal";
import {Footer, Navbar} from "./2ndProject/components";

import {getData} from "./2ndProject/services/dataSlice";
import {subTotal} from "./2ndProject/services/cartSlice";

import {
  AllProduct,
  Home,
  LogIn,
  SignUp,
  Cart,
  ProductDetail,
} from "./2ndProject/pages";

//import ProtectedRoute from "./2ndProject/protected/ProtectedRoute";

function App() {
  const dispatch = useDispatch();
  const {items} = useSelector((state) => state.data);
  const cart = useSelector((state) => state.cart);

  const [theme, setTheme] = useState("dark");
  const changeTheme = () => {
    theme === "dark" ? setTheme("light") : setTheme("dark");
  };

  useEffect(() => {
    dispatch(getData());
  }, [dispatch]);

  useEffect(() => {
    dispatch(subTotal());
  }, [dispatch, cart]);

  useEffect(() => {
    document.title = "demostore";

    const registerAnimations = () => {
      const sr = scrollReveal({
        origin: "bottom",
        distance: "80px",
        duration: 1000,
        reset: false,
      });
      sr.reveal(
        `nav, .service-container, .categories-container, .slider-container,
         .product-container, .allproducts-container, .detail-container, .mobile-bottom,
          footer
          `,
        {interval: 500}
      );
    };
    registerAnimations();
  }, []);

  return (
    <div className="app" data-theme={"dark"}>
      <Navbar changeTheme={changeTheme} currentTheme={theme} />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route extact path="/products" element={<AllProduct items={items} />} />
        <Route path="/cart" element={<Cart />} />
        <Route exact path="/login" element={<LogIn />} />
        <Route exact path="/signup" element={<SignUp />} />
        <Route path="/products/:id" element={<ProductDetail />} />
      </Routes>
    </div>
  );
}

export default App;
