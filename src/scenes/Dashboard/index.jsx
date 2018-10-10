import React from "react";
import PleaseSignIn from "../../components/PleaseSignIn";
import ConnectedNavBar from "../../components/NavBar/connected";

export default () => (
  <React.Fragment>
    <PleaseSignIn>
      <ConnectedNavBar />
      <h1>this would be a password protected area.</h1>
    </PleaseSignIn>
  </React.Fragment>
);
