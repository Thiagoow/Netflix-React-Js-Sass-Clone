import React from "react";

const Button = () => {
  const [count, setCount] = React.useState(0);

  const handleClick = () => {
    setCount((count) => count + 1);
  };

  return (
    <button className="button" onClick={handleClick}>
      count is: {count}
    </button>
  );
};

export default Button;
