import React from "react";

function H2(props) {
  return (
    <React.Fragment>
      <h2>{props.text}</h2>
      <div>{props.children}</div>
    </React.Fragment>
  );
}

export default H2;
