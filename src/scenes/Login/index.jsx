import React from "react";
import LoginFormConnector from "./components/connector";
// import UnAuthedNavBar from "../../components/UnAuthedNav";
// import RedirectIfAuthed from "../../components/RedirectIfAuthed";

const LoginScreen = () => (
  <React.Fragment>
    {/* <RedirectIfAuthed destination="/dashborad"> */}
    <LoginFormConnector />
    {/* </RedirectIfAuthed> */}
    {/* <p>here!</p> */}
  </React.Fragment>
);

export default LoginScreen;

// <UnAuthedNavBar />;
