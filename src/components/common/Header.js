import React from "react";
import { Link } from "react-router-dom";

class Home extends React.Component {
  render() {
    return (
      <header
        className='masthead'
        style={{ backgroundImage: `url('${this.props.imageURL}')` }}
      >
        <div className='container'>
          <div className='intro-text'>
            <div className='intro-lead-in'>{this.props.title}</div>
            <div className='intro-heading text-uppercase'>
              {this.props.subTitle}
            </div>
            {this.props.showButton && (
              <Link
                className='btn btn-primary btn-xl text-uppercase js-scroll-trigger'
                to={this.props.buttonLink}
              >
                {this.props.buttonText}
              </Link>
            )}
          </div>
        </div>
      </header>
    );
  }
}

export default Home;
