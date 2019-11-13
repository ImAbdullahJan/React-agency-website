import React from "react";
import Field from "../common/Field";

const fields = {
  sections: [
    [
      {
        name: "name",
        elementName: "input",
        type: "text",
        placeholder: "Your Name *"
      },
      {
        name: "email",
        elementName: "input",
        type: "email",
        placeholder: "Your Email *"
      },
      {
        name: "phone",
        elementName: "input",
        type: "text",
        placeholder: "Your Phone Number*"
      }
    ],
    [
      {
        name: "message",
        elementName: "textarea",
        type: "text",
        placeholder: "Please enter a message."
      }
    ]
  ]
};

class Contact extends React.Component {
  state = { name: "", email: "", phone: "", message: "" };

  submitForm = e => {
    e.preventDefault();
    alert("Thank you, Your message is submitted");
  };

  render() {
    return (
      <section className='page-section' id='contact'>
        <div className='container'>
          <div className='row'>
            <div className='col-lg-12 text-center'>
              <h2 className='section-heading text-uppercase'>Contact Us</h2>
              <h3 className='section-subheading text-muted'>
                Lorem ipsum dolor sit amet consectetur.
              </h3>
            </div>
          </div>
          <div className='row'>
            <div className='col-lg-12'>
              <form
                onSubmit={e => this.submitForm(e)}
                id='contactForm'
                name='sentMessage'
                novalidate='novalidate'
              >
                <div className='row'>
                  {fields.sections.map((section, index) => {
                    console.log("section", section, "index", index);
                    return (
                      <div className='col-md-6' key={index}>
                        {section.map((field, index) => {
                          return (
                            <Field
                              {...field}
                              key={index}
                              value={this.state[field.name]}
                              onChange={e => {
                                this.setState({ [field.name]: e.target.value });
                              }}
                            />
                          );
                        })}
                      </div>
                    );
                  })}

                  <div className='clearfix'></div>
                  <div className='col-lg-12 text-center'>
                    <div id='success'></div>
                    <button
                      id='sendMessageButton'
                      className='btn btn-primary btn-xl text-uppercase'
                      type='submit'
                    >
                      Send Message
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default Contact;
