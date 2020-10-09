import React, { Component } from "react";
import "../../css/SortCity.css";

export default class SortCity extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedOption: "all",
      openForm: false,
    };
    this.onChangeValue = this.onChangeValue.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }
  onChangeValue(e) {
    this.setState({ selectedOption: e.target.value });
    this.props.callback(e.target.value);
  }
  handleSubmit(e) {
    e.preventDefault();
  }
  handleClick() {
    this.setState({
      openForm: !this.state.openForm,
    });
  }
  render() {
    const { citylist } = this.props;
    return (
      <div className="SortCity">
        <h4>SORT RESULT</h4>
        <div className="sortFilter" onClick={this.handleClick}>
          <h5 style={{ lineHeight: "5px", margin: "1rem 0 1rem 0" }}>
            Location
          </h5>
          {this.state.openForm ? (
            <div className="showSortbtn"></div>
          ) : (
            <div className="hideSortbtn"></div>
          )}
        </div>
        {this.state.openForm ? (
          <form className="cityList" onSubmit={this.handleSubmit}>
            {citylist.map((city) => (
              <div key={city.id} className="citySelection">
                <label>
                  <input
                    className="city"
                    type="radio"
                    value={city.name}
                    id={city.name}
                    onChange={this.onChangeValue}
                    checked={this.state.selectedOption === city.name}
                  />
                  {city.name}
                </label>
              </div>
            ))}
            <div key="all" className="citySelection">
              <label>
                <input
                  className="city"
                  type="radio"
                  value="all"
                  id="all"
                  onChange={this.onChangeValue}
                  checked={this.state.selectedOption === "all"}
                />
                All Cities
              </label>
            </div>
          </form>
        ) : null}
      </div>
    );
  }
}
