import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { FaBars } from "react-icons/fa";
import "../assets/css/topnav.css";
import Badge from "@mui/material/Badge";
import { styled } from "@mui/material/styles";
import IconButton from "@mui/material/IconButton";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import Logo from '../assets/images/shopping-logo.svg'
import { useNavigate } from "react-router-dom";
const StyledBadge = styled(Badge)(({ theme }) => ({
  "& .MuiBadge-badge": {
    right: -3,
    top: 13,
    border: `2px solid ${theme.palette.background.paper}`,
    padding: "0 4px",
  },
}));


const TopNav = () => {
  const [showNavbar, setShowNavbar] = useState(false);
   let navigate = useNavigate();
  const handleshownavbar = () => {
    setShowNavbar(!showNavbar);
  };

  return (
    <>
      <section className="topnav">
        <div className="nav-container">
          <div className="logo">
            <img
              src={Logo}
              alt="Easyshopping"
            />
          </div>
          <div className={`nav-elements ${showNavbar && "active"}`}>
            <ul>
              <li>
                <NavLink to="/" onClick={handleshownavbar}>Home</NavLink>
              </li>
              <li>
                <NavLink to="/about" onClick={handleshownavbar}>About</NavLink>
              </li>
              <li>
                <NavLink to="/product"onClick={handleshownavbar}>Shop</NavLink>
              </li>
              <li>
                <NavLink to="/contact" onClick={handleshownavbar}>Contact</NavLink>
              </li>
            </ul>
          </div>
          <div className="cart">
          <button className="login-button">Login</button>
            <IconButton aria-label="cart" onClick={()=>navigate("/cart")}>
              <StyledBadge badgeContent={1} color="success">
                <ShoppingCartIcon />
              </StyledBadge>
            </IconButton>
          </div>
          <div className="menu-icon" onClick={handleshownavbar}>
            <FaBars />
          </div>
        </div>
      </section>
    </>
  );
};

export default TopNav;
