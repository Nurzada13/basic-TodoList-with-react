import { clear } from "@testing-library/user-event/dist/clear";
import React from "react";

class Todolist extends React.Component {
  constructor() {
    super();
    this.state = {
      inputText: "",
      submitWords: [],
    };
  }

  inputMethod = (event) => {
    this.setState({ inputText: event.target.value });
  };

  submitMethod = () => {
    this.setState({
      submitWords: [this.state.inputText, ...this.state.submitWords],
    });
    this.setState({ inputText: "" }); //clear input
  };

  clearMethod = () => {
    this.setState({ submitWords: [] });
  };
  render() {
    console.log(this.state.submitWords);
    return (
      <>
        <h2>Todo List</h2>
        <input
          onChange={this.inputMethod}
          value={this.state.inputText}
          placeholder="e.g learn react"
        />
        <button onClick={this.submitMethod}>Submit</button>
        <ul>
          {this.state.submitWords.map((stringinsidesubmitword) => (
            <li>{stringinsidesubmitword}</li>
          ))}
        </ul>
        <p onClick={this.clearMethod}>clear items </p>
      </>
    );
  }
}
export default Todolist;
