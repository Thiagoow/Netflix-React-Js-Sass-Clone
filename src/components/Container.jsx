import React from "react";

/*Receive the content who should be rendered in
the same way we receive a regular component prop */
function Container({ content }) {
  return <div className="container">{content}</div>;
}

export default Container;
