import React from "react";
import PleaseSignIn from "../../components/PleaseSignIn";
import { ApolloConsumer } from "react-apollo";

export default () => (
  <React.Fragment>
    <PleaseSignIn>
      <h1>this would be a password protected area.</h1>
      <ApolloConsumer>
        {client => (
          <button
            onClick={() => {
              Promise.resolve(localStorage.removeItem("token")).then(() =>
                client.resetStore()
              );
            }}
          >
            Log out
          </button>
        )}
      </ApolloConsumer>
    </PleaseSignIn>
  </React.Fragment>
);
