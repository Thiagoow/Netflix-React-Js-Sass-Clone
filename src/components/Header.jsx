import React from "react";
import logo from "../../assets/img/logo.svg";
import sass from "../../assets/scss/base/_export.module.scss";

const Header = () => {
  const [scrollColor, setScrollColor] = React.useState(false);

  const changeHeaderColor = () => {
    //👇🏽 54px = Header height
    if (window.scrollY >= 54) {
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
        background: scrollColor ? sass.bodyColor : "transparent"
      }}
    >
      <a href="/" className="logoBtn">
        <img src={logo} alt="Netflix Logo" className="logo" />
      </a>
    </header>
  );
};

export default Header;
