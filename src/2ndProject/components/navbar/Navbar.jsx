import {useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux";

import {GiHamburgerMenu} from "react-icons/gi";
import {MdClose} from "react-icons/md";
import {ImSun} from "react-icons/im";
import {HiMoon} from "react-icons/hi";
import {useNavigate} from "react-router-dom";
import {AiOutlineShoppingCart} from "react-icons/ai";
import {useUserAuth} from "../../context/auth/UserAuthContext";
import {removeNames} from "../../services/nameSlice";
import {subTotal} from "../../services/cartSlice";

const Navbar = ({changeTheme, currentTheme}) => {
  const {cartTotalQuantity} = useSelector((state) => state.cart);
  const [navState, setNavState] = useState(false);
  const html = document.querySelector("html");
  html.addEventListener("click", () => setNavState(false));

  const {user, logOut} = useUserAuth();
  const {fname} = useSelector((state) => state.name);
  const cart = useSelector((state) => state.cart);

  const navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(subTotal());
  }, [dispatch, cart]);

  // const handleGotoProducts = () => {
  //   if (!user) {
  //     navigate("/login");
  //     window.alert(
  //       "please signin to see product page!! Redirecting you to login page"
  //     );
  //   } else {
  //     navigate("/products");
  //   }
  // };

  const handleSignOut = async () => {
    try {
      await logOut();
      dispatch(removeNames());
      navigate("/");
    } catch (err) {}
  };

  const handleSignIn = (e) => {
    navigate("/login");
  };

  const handleCart = () => {
    navigate("/cart");
  };

  return (
    <nav>
      <div className="container">
        <div className="brand" onClick={() => navigate("/")}>
          <font color="#FF0000">d</font>
          <font color="#FF8000">e</font>
          <font color="#FFFF00">m</font>
          <font color="#0da15c">o</font>
          <font color="#4040FF">s</font>
          <font color="#A000C0">t</font>
          <font color="#FF0000">o</font>
          <font color="#FF8000">r</font>
          <font color="#FFFF00">e</font>
        </div>
        <div className="links-container" onClick={(e) => e.stopPropagation()}>
          <div className="toggle">
            {navState ? (
              <MdClose onClick={() => setNavState(false)} />
            ) : (
              <GiHamburgerMenu
                onClick={(e) => {
                  e.stopPropagation();
                  setNavState(true);
                }}
              />
            )}
            <div className="cart" onClick={() => navigate("/cart")}>
              <AiOutlineShoppingCart />({cartTotalQuantity})
            </div>
            <div onClick={changeTheme}>
              {currentTheme === "dark" ? (
                <ImSun className="sun" />
              ) : (
                <HiMoon className="moon" />
              )}
            </div>
          </div>
          <div className={`links ${navState ? "responsive-toggle" : ""}`}>
            <ul>
              <li className="user">
                <span>
                  {user ? (
                    <>
                      {fname ? (
                        <>
                          <span style={{color: "#b03f3f"}}>Hello, {fname}</span>
                        </>
                      ) : (
                        <span>Hello, {user.email}</span>
                      )}
                    </>
                  ) : null}
                </span>
              </li>
              <li>
                <span onClick={() => navigate("/")}>Home</span>
              </li>
              <li onClick={() => navigate("/products")}>
                <span>Products</span>
              </li>
              <li>
                {user ? (
                  <span onClick={() => handleSignOut()}>Sign Out</span>
                ) : (
                  <>
                    <span onClick={() => handleSignIn()}>Sign In</span>
                  </>
                )}
              </li>
              <li onClick={() => handleCart()}>
                <span>
                  <AiOutlineShoppingCart />
                  Cart({cartTotalQuantity})
                </span>
              </li>
              <li onClick={changeTheme} className="color-mode">
                {currentTheme === "dark" ? (
                  <ImSun className="sun" />
                ) : (
                  <HiMoon className="moon" />
                )}
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
