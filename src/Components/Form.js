import React from "react";

class Form extends React.Component {
  constructor(props) {
    super(props);

    this.state = { text1 : ""};

    this.handleSubmit = this.handleSubmit.bind(this);

    this.handleChange = this.handleChange.bind(this);
  }

  handleSubmit(event) {
    event.preventDefault();
  }

  handleChange(event) {
    this.setState({[event.target.name] : event.target.value});
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          <input type="text" name="text1" value={this.state.value} onChange={this.handleChange} />
          <input type="text" name="text2" value={this.state.value} onChange={this.handleChange} />
          <input type="text" name="text3" value={this.state.value} onChange={this.handleChange} />
        </label>
        <input type="submit" name="submit" />

        <div>text1 : {this.state.text1}</div>
        <div>text2 : {this.state.text2}</div>
        <div>text3 : {this.state.text3}</div>
      </form>
    );
  }
}

export default Form;
