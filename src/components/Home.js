import React, { Component } from "react";
import {
  fetchSkillers,
  fetchCities,
  fetchRelated,
  fetchDefinition,
} from "../data/fetchData";
import SearchBar from "./SearchBar";
import SkillerList from "./skillers/SkillerList";
import SortCity from "./cities/SortCity";
import Related from "./Related";
import "../css/Home.css";

export default class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      skillers: [],
      cities: [],
      related: [],
      definitions: [],
      filteredDefinitions: [],
    };
  }
  async getData() {
    const data = await fetchSkillers();
    this.setState({
      skillers: data,
    });
  }
  async getCity() {
    const data = await fetchCities();
    this.setState({
      cities: data,
    });
  }
  async getRelatedSearches() {
    const data = await fetchRelated();
    this.setState({
      related: data,
    });
  }
  async getDefinitions() {
    const data = await fetchDefinition();
    this.setState({
      definitions: data,
    });
  }
  async findDefinition(input) {
    if (input === "") {
      this.setState({
        filteredDefinitions: [],
      });
    }
    const data = this.state.definitions;
    const filteredArray = data.filter((item) => {
      return item.title.match(new RegExp(input, "i"));
    });
    if (filteredArray.length !== 0) {
      this.setState({
        filteredDefinitions: filteredArray,
      });
    } else {
      this.setState({
        filteredDefinitions: [],
      });
    }
  }
  filterCallback = async (input) => {
    const data = await fetchSkillers();
    if (input !== "") {
      const res = data.filter((people) => {
        return people.skill_in.match(new RegExp(input, "i"));
      });
      this.setState({ skillers: res });
      this.findDefinition(input);
    } else {
      this.setState({ skillers: data, filteredDefinitions: [] });
    }
  };
  filterCityCallback = async (input) => {
    const data = await fetchSkillers();
    if (input !== "") {
      if (input === "all") {
        this.setState({ skillers: data });
      } else {
        const res = data.filter((people) => {
          return people.location.match(new RegExp(input, "i"));
        });
        this.setState({ skillers: res });
      }
    } else {
      this.setState({ skillers: data });
    }
  };
  componentDidMount() {
    this.getData();
    this.getCity();
    this.getRelatedSearches();
    this.getDefinitions();
  }
  render() {
    return (
      <div className="Home">
        <SearchBar callback={this.filterCallback} />
        <div className="body">
          {this.state.related.length !== 0 ? (
            <Related relatedList={this.state.related} />
          ) : null}

          <div className="main-sec">
            {this.state.filteredDefinitions.length !== 0 ? (
              <div>
                {this.state.filteredDefinitions.map((item) => (
                  <div className="definitionDiv" key={item.id}>
                    <h5 className="definitionTitle">DEFINITION</h5>
                    <p className="definitionText">{item.defination}</p>
                  </div>
                ))}
              </div>
            ) : null}
            {this.state.skillers.length !== 0 ? (
              <SkillerList skillerlist={this.state.skillers} />
            ) : (
              <div>
                <h2>Ops! No skiller matches</h2>
              </div>
            )}
          </div>
          <div className="sort">
            {this.state.cities ? (
              <SortCity
                citylist={this.state.cities}
                callback={this.filterCityCallback}
              />
            ) : null}
          </div>
        </div>
      </div>
    );
  }
}
