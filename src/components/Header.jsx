import React from "react";
import users from "../utils/users";
import logo from "../../assets/img/logo.svg";
import sass from "../../assets/scss/base/_export.module.scss";

const Header = () => {
  const [scrollColor, setScrollColor] = React.useState(false);

  const changeHeaderColor = () => {
    //👇🏽 64px = 4 rem -> Header height
    if (window.scrollY >= 64) {
      setScrollColor(true);
    } else {
      setScrollColor(false);
    }
  };

  //Activate the function above:
  React.useEffect(() => {
    window.addEventListener("scroll", changeHeaderColor);
  }, []);

  return (
    <header
      className="header"
      style={{
        transition: "0.35s all ease-in-out",
        background: scrollColor ? sass.bodyColor : "transparent"
      }}
    >
      <a href="/home" className="logoBtn">
        <img src={logo} alt="Netflix Logo" className="logo" />
      </a>

      <a href="/" className="userImg">
        <img src={users[0].photo} alt="User image" />
      </a>
    </header>
  );
};

export default Header;
