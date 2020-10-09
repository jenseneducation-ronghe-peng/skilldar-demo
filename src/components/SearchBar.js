import React, { Component } from "react";
import "../css/SearchBar.css";

export default class SearchBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userInput: "",
    };
    this.searchSkill = this.keyUpHandler.bind(this);
  }
  keyUpHandler(e) {
    this.setState({
      userInput: e.target.value,
    });
    this.props.callback(e.target.value);
  }
  render() {
    return (
      <div className="SearchBar">
        <div className="logo"></div>
        <input
          className="searchWord"
          placeholder="Search"
          value={this.state.userInput}
          onChange={this.searchSkill}
        ></input>
      </div>
    );
  }
}
