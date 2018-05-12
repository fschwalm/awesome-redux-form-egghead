import React from "react";
import { Field, reduxForm } from "redux-form";
import { CustomInput, CustomSelect } from "./Fields";
import { required, minLength, MaxLength } from '../validations';

class RegisterForm extends React.Component {
  render() {
    const { handleSubmit } = this.props;
    return (
      <form onSubmit={handleSubmit}>
        <Field
          name="firstname"
          label="First Name"
          component={CustomInput}
          type="text"
          validate={[required]}
          />
          <Field
          name="surname"
          label="Surname"
          component={CustomInput}
          type="text"
          validate={[required]}
          />
          <Field
          name="username"
          label="User name"
          component={CustomInput}
          type="text"
          validate={[required, minLength, MaxLength]}
        />
        <Field
          name="preference"
          component={CustomSelect}
          label="Preferred Formatting"
        />
        <Field
          name="newsletter"
          component={CustomInput}
          label="Sign up to newsletter?"
          type="checkbox"
        />
        <button type="submit">Submit</button>
      </form>
    );
  }
}

RegisterForm = reduxForm({
  form: "register"
})(RegisterForm);

export default RegisterForm;
