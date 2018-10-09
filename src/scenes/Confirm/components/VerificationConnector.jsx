import React from "react";
import gql from "graphql-tag";
import { Mutation, withApollo } from "react-apollo";
import PropTypes from "prop-types";
import VerificationMessage from "./VerificationMessage";
import SuccessfulVerification from "./SuccessfulVerification";

export const VERIFICATION_MUTATION = gql`
  mutation verify($input: VerifyMutationInput!) {
    verify(input: $input) {
      code
      success
      message
      token
    }
  }
`;

class Verify extends React.Component {
  constructor() {
    super();
    this.state = {
      confirmed: false
    };
  }

  render() {
    const { email, verificationToken } = this.props;
    const { confirmed } = this.state;
    if (confirmed) {
      return <SuccessfulVerification />;
    }
    return (
      <Mutation
        mutation={VERIFICATION_MUTATION}
        variables={{ input: { email, verificationToken } }}
        pollInterval={3000}
        fetchPolicy="no-cache"
        onCompleted={data => {
          const { token } = data.verify;
          if (token) {
            // Store the token in cookie
            localStorage.setItem("token", token);

            this.setState({
              confirmed: true
            });
          }
        }}
      >
        {(verify, { data, loading, error }) => (
          <VerificationMessage
            submitToConnector={verify}
            data={data}
            loading={loading}
            error={error}
          />
        )}
      </Mutation>
    );
  }
}

Verify.propTypes = {
  email: PropTypes.string.isRequired,
  verificationToken: PropTypes.string.isRequired
};

export default withApollo(Verify);
