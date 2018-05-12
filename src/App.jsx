import React from "react";
import RegisterForm from "./components/RegisterForm";
import { SubmissionError } from 'redux-form';

class RegisterFormContainer extends React.Component {
  submit = values => {
    if(['kent', 'andy', 'john', 'joel'].includes(values.username)){
      throw new SubmissionError({
        username: 'Username already taken'
      })
    }
    window.alert(JSON.stringify(values, null, 4));
  };

  getInitialValues() {
    return {
      preference: "tabs",
      newsletter: "true "
    };
  }

  render() {
    return (
      <RegisterForm
        onSubmit={this.submit}
        initialValues={this.getInitialValues()}
      />
    );
  }
}

export default RegisterFormContainer;
