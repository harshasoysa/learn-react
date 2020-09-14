import React from "react";

const TempratureInput = (props) => {
  return (
    <div>
      <label>
        {props.scale} :
        <input
          type="text"
          value={props.temperature}
          onChange={props.onChange}
          name={props.scale}
        />
      </label>
    </div>
  );
};

export default TempratureInput;
