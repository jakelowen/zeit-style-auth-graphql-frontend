import { Query } from "react-apollo";
import gql from "graphql-tag";
import React from "react";
import NavBar from ".";

const ME_QUERY = gql`
  query {
    me {
      firstName
      lastName
      email
    }
  }
`;

const logout = client =>
  Promise.resolve(localStorage.removeItem("token")).then(() =>
    client.resetStore()
  );

const ConnectedNavBar = () => (
  <Query query={ME_QUERY}>
    {({ data, loading, startPolling, client }) => {
      if (loading) return <p>Loading...</p>;
      if (!data.me) {
        startPolling(3000);
        return <NavBar logoutFunc={() => logout(client)} />;
      }
      return <NavBar loggedIn logoutFunc={() => logout(client)} />;
    }}
  </Query>
);

ConnectedNavBar.propTypes = {};

export default ConnectedNavBar;
