import React, { useState } from "react";
import Logo from "../Assets/Logo.svg";
import { BsCart2 } from "react-icons/bs";
import { HiOutlineBars3 } from "react-icons/hi2";
import {
  Box,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import { Link } from "react-router-dom"; // Import Link component from react-router-dom
import HomeIocn from "@mui/icons-material/Home";
import InfoIcon from "@mui/icons-material/Info";
import CommentRoundedIcon from "@mui/icons-material/CommentRounded";
import PhoneAndroidIcon from "@mui/icons-material/PhoneAndroid";
import { TbTruckDelivery } from "react-icons/tb";
import ShoppingCartRoundedIcon from "@mui/icons-material/ShoppingCartRounded";

const Navbar = () => {
  const [openMenu, SetOpenMenu] = useState(false);
  const menuOptions = [
    {
      text: "Home",
      icon: <HomeIocn />,
      to: "/", // Link to Home component
    },
    {
      text: "About",
      icon: <InfoIcon />,
      to: "/about", // Link to About component
    },
    {
      text: "Work",
      icon: <TbTruckDelivery />,
      to: "/work", // Link to work component
    },
    {
      text: "Testimonials",
      icon: <CommentRoundedIcon />,
      to: "/testimonials", // Link to Testimonial component
    },
    {
      text: "Contact",
      icon: <PhoneAndroidIcon />,
      to: "/contact", // Link to Contact component
    },
    // You can add more menu options here
  ];

  return (
    <nav className="nav-logo-container">
      <div>
        <img src={Logo} alt="" />
      </div>
      <div className="navbar-links-container">
        {menuOptions.map((item) => (
          <Link key={item.text} to={item.to}>
            {item.text}
          </Link>
        ))}
        <Link to="/cart">
          <BsCart2 className="navbar-cart-icon" />
        </Link>
        <button className="primary-button">Order Now🤤</button>
      </div>
      <div className="navbar-menu-container">
        <HiOutlineBars3 onClick={() => SetOpenMenu(true)} />
      </div>
      <Drawer open={openMenu} onClose={() => SetOpenMenu(false)} anchor="right">
        <Box
          sx={{ width: 250 }}
          role="presentation"
          onClick={() => SetOpenMenu(false)}
          onKeyDown={() => SetOpenMenu(false)}
        >
          <List>
            {menuOptions.map((item) => (
              <ListItem key={item.text} disablePadding>
                <ListItemButton component={Link} to={item.to}>
                  <ListItemIcon>{item.icon}</ListItemIcon>
                  <ListItemText primary={item.text} />
                </ListItemButton>
              </ListItem>
            ))}
          </List>
        </Box>
      </Drawer>
    </nav>
  );
};

export default Navbar;
