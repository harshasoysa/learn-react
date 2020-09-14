import React, { Component } from "react";

import TempratureInput from "./TempratureInput";

class Calculator extends Component {
  constructor(props) {
    super(props);

    this.state = {
      value: 0,
      scale: "c",
    };

    this.onChange = this.onChange.bind(this);
  }

  onChange(e) {
    this.setState({
      value: e.target.value,
      scale: e.target.name,
    });
  }

  render() {
    const c =
      this.state.scale === "c" ? this.state.value : this.state.value / 2;
    const f =
      this.state.scale === "f" ? this.state.value : this.state.value * 2;
    return (
      <div>
        <TempratureInput scale="c" temperature={c} onChange={this.onChange} />
        <TempratureInput scale="f" temperature={f} onChange={this.onChange} />
      </div>
    );
  }
}

export default Calculator;
