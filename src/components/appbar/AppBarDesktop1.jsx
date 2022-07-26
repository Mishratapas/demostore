import styled from "styled-components";

import {AiOutlineShoppingCart} from "react-icons/ai";
import {MdFavorite, MdAccountCircle} from "react-icons/md";
import {Link} from "react-router-dom";
import {Divider} from "@mui/material";
import {useSelector} from "react-redux";

export default function AppBarDesktop1() {
  const {cartTotalQuantity} = useSelector((state) => state.cart);
  return (
    <Nav>
      <div className="brand">
        <font color="#FF0000">d</font>
        <font color="#FF8000">e</font>
        <font color="#FFFF00">m</font>
        <font color="#007940">o</font>
        <font color="#4040FF">s</font>
        <font color="#A000C0">t</font>
        <font color="#FF0000">o</font>
        <font color="#FF8000">r</font>
        <font color="#FFFF00">e</font>
        <div className="toggle"></div>
      </div>
      <ul className="links">
        <li>
          <Link to="/" className="active">
            Home
          </Link>
        </li>
        <li>
          <Link to="/products">Products</Link>
        </li>
        <Divider
          variant="fullWidth"
          orientation="vertical"
          style={{fontWeight: "bold"}}
          flexItem
        />
        <li>
          <Link to="/cart">
            <AiOutlineShoppingCart style={{width: 24, height: 24}} />
            cart({cartTotalQuantity})
          </Link>
        </li>
        <li>
          <Link to="/">
            <MdAccountCircle style={{width: 24, height: 24}} />
            Profile
          </Link>
        </li>
        <li>
          <Link to="/">
            <MdFavorite style={{width: 24, height: 24}} />
            favourite
          </Link>
        </li>
      </ul>
    </Nav>
  );
}

const Nav = styled.nav`
  overflow: hidden;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 4vw;
  background-color: black;
  .brand {
    font {
      font-size: 2rem;
    }
    img {
      margin-top: 1rem;
      cursor: pointer;
    }
    .toggle {
      display: none;
    }
  }
  .links {
    display: flex;
    list-style-type: none;
    gap: 2rem;
    li {
      a {
        color: #fc4958;
        font-weight: 600;
        text-decoration: none;
        text-transform: uppercase;
        letter-spacing: 0.2rem;
        transition: 0.3s ease-in-out;
        &:hover {
          color: #f9c74f;
        }
      }
      .active {
        color: #f9c74f;
      }
    }
  }
`;
