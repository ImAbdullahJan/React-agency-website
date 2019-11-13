import React from "react";
import Field from "../common/Field";
import { withFormik } from "formik";
import * as yup from "yup";

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
                onSubmit={this.props.handleSubmit}
                id='contactForm'
                name='sentMessage'
                noValidate='novalidate'
              >
                <div className='row'>
                  {fields.sections.map((section, index) => {
                    return (
                      <div className='col-md-6' key={index}>
                        {section.map((field, index) => {
                          return (
                            <Field
                              {...field}
                              key={index}
                              value={this.props.values[field.name]}
                              onChange={this.props.handleChange}
                              onBlur={this.props.handleBlur}
                              touched={this.props.touched[field.name]}
                              errors={this.props.errors[field.name]}
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

export default withFormik({
  mapPropsToValues: () => ({ name: "", email: "", phone: "", message: "" }),
  validationSchema: yup.object().shape({
    name: yup
      .string()
      .min(5, "name must be 5 charactar long")
      .required("you must give your name"),
    email: yup
      .string()
      .email("Please provide valid email")
      .required("you must provide email address"),
    phone: yup
      .string()
      .min(7, "greater then be 7 char")
      .max(11, "less then 11 char")
      .required("this field is also required"),
    message: yup
      .string()
      .min(200, "Please provide more details")
      .required("message is also required")
  }),
  handleSubmit: (values, { setSubmitting }) => {
    alert("You submitted form");
  }
})(Contact);
