import React from "react";

class TeamMember extends React.Component {
  render() {
    return (
      <div className='team-member'>
        <img className='mx-auto rounded-circle' src={this.props.image} alt='' />
        <h4>{this.props.memberName}</h4>
        <p className='text-muted'>{this.props.details}</p>
        <ul className='list-inline social-buttons'>
          <li className='list-inline-item'>
            <a href='/'>
              <i className='fab fa-twitter'></i>
            </a>
          </li>
          <li className='list-inline-item'>
            <a href='/'>
              <i className='fab fa-facebook-f'></i>
            </a>
          </li>
          <li className='list-inline-item'>
            <a href='/'>
              <i className='fab fa-linkedin-in'></i>
            </a>
          </li>
        </ul>
      </div>
    );
  }
}

export default TeamMember;
