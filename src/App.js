import {Route, Routes} from "react-router-dom";

import Home from "./pages/home";
import NotFound from "./components/notfound";
import AllProducts from "./components/products/AllProducts";
import Cart from "./pages/cart";
import LogIn from "./pages/validation/LogIn";
import SignUp from "./pages/validation/SignUp";
import {useEffect} from "react";

function App() {
  useEffect(() => {
    document.title = "demostore";
    console.log("reload");
  }, []);

  return (
    <Routes>
      <Route exact path="/" element={<Home />} />
      <Route exact path="/login" element={<LogIn />} />
      <Route exact path="/signup" element={<SignUp />} />
      <Route exact path="/products" element={<AllProducts />} />
      <Route exact path="/cart" element={<Cart />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

export default App;
