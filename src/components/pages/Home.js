import React from "react";
import Header from "../common/Header";
import headerImage from "../img/header-bg.jpg";

import Services from "../common/Services";
import Portfolio from "../common/Portfolio";
import Team from "../common/Team";

class Home extends React.Component {
  render() {
    return (
      <div>
        <Header
          title='Welcome To Our Studio!'
          subTitle="IT'S NICE TO MEET YOU"
          buttonText='Tell me more'
          buttonLink='/sevices'
          showButton='true'
          imageURL={headerImage}
        />
        <Services />
        <Portfolio />
        <Team />
      </div>
    );
  }
}

export default Home;
