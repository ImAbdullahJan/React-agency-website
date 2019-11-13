import React from "react";

import img1 from "../img/team/1.jpg";
import img2 from "../img/team/2.jpg";
import img3 from "../img/team/3.jpg";
import TeamMember from "./TeamMember";

const members = [
  {
    memberName: "Kay Garland",
    details: "Lead Designer",
    image: img1
  },
  {
    memberName: "Larry Parker",
    details: "Junior Designer",
    image: img2
  },
  {
    memberName: "Diana Pertersen",
    details: "Senior Designer",
    image: img3
  }
];

class Team extends React.Component {
  render() {
    return (
      <section className='bg-light page-section' id='team'>
        <div className='container'>
          <div className='row'>
            <div className='col-lg-12 text-center'>
              <h2 className='section-heading text-uppercase'>
                Our Amazing Team
              </h2>
              <h3 className='section-subheading text-muted'>
                Lorem ipsum dolor sit amet consectetur.
              </h3>
            </div>
          </div>
          <div className='row'>
            {members.map((member, index) => {
              return (
                <div className='col-sm-4' key={index}>
                  <TeamMember {...member} />
                </div>
              );
            })}
          </div>
          <div className='row'>
            <div className='col-lg-8 mx-auto text-center'>
              <p className='large text-muted'>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut
                eaque, laboriosam veritatis, quos non quis ad perspiciatis,
                totam corporis ea, alias ut unde.
              </p>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default Team;
