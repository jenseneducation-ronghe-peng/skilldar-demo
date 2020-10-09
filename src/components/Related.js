import React, { Component } from "react";

export default class Related extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    const { relatedList } = this.props;

    return (
      <div className="Related">
        <h4>Related Searches</h4>
        <div className="searchTitle">
          {relatedList ? (
            <div>
              {relatedList.map((related) => (
                <h5 key={related.id} style={{ color: "red" }}>
                  #{related.title}
                </h5>
              ))}
            </div>
          ) : null}
        </div>
      </div>
    );
  }
}
