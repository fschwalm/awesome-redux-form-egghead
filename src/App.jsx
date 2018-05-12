import React from "react";
import RegisterForm from "./components/RegisterForm";

class RegisterFormContainer extends React.Component {
  submit = values => {
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
