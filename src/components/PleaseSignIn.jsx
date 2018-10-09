import { Query } from "react-apollo";
// import { CURRENT_USER_QUERY } from './User';
// import Signin from './Signin';
import gql from "graphql-tag";
import React from "react";
import PropTypes from "prop-types";
import LogInScene from "../scenes/Login";

const ME_QUERY = gql`
  query {
    me {
      firstName
      lastName
      email
    }
  }
`;

const PleaseSignIn = props => (
  <Query query={ME_QUERY}>
    {({ data, loading, startPolling }) => {
      if (loading) return <p>Loading...</p>;
      if (!data.me) {
        startPolling(3000);
        return <LogInScene />;
      }
      return props.children;
    }}
  </Query>
);

PleaseSignIn.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node
  ]).isRequired
};

export default PleaseSignIn;
