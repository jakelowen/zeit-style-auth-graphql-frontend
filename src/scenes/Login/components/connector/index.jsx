import gql from "graphql-tag";
import { Mutation } from "react-apollo";
import React from "react";
// import { Formik, Form } from "formik";
// import * as Yup from "yup";
// import TextInput from "../../../../components/TextInput";
// import FormSubmitButton from "../../../../components/FormSubmitButton";
// import Loading from "../../../../components/Loading";
import AwaitingConfirmationScreen from "../AwaitingConfirmationScreen";
import LoginForm from "../LoginForm";

export const REGISTER_MUTATION = gql`
  mutation register($input: RegisterMutationInput!) {
    register(input: $input) {
      code
      success
      message
      securityCode
    }
  }
`;

class Login extends React.Component {
  constructor() {
    super();
    this.state = {
      securityCode: null,
      email: null
    };
    this.updateParentState = this.updateParentState.bind(this);
  }

  updateParentState(key, value) {
    this.setState({
      [key]: value
    });
  }

  render() {
    const { securityCode, email } = this.state;
    return (
      <div>
        {securityCode && email ? (
          <AwaitingConfirmationScreen
            securityCode={securityCode}
            email={email}
          />
        ) : (
          <Mutation mutation={REGISTER_MUTATION}>
            {mutation => (
              <LoginForm
                mutation={mutation}
                updateParentState={this.updateParentState}
              />
            )}
          </Mutation>
        )}
      </div>
    );
  }
}

export default Login;
