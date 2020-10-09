import React, { Component } from "react";
import SkillCard from "./SkillerCard";

export default class SkillerList extends Component {
  /*constructor(props) {
    super(props);
  }*/
  render() {
    const { skillerlist } = this.props;
    return (
      <div className="SkillerList" style={{ alignItems: "center" }}>
        {skillerlist.map((skiller) => (
          <SkillCard
            key={skiller.id}
            id={skiller.id}
            name={skiller.name}
            intro={skiller.intro}
            location={skiller.location}
            blueScore={skiller.blue_score}
            redScore={skiller.red_score}
            skills={skiller.skill_in}
            pic={skiller.pic}
          />
        ))}
      </div>
    );
  }
}
