import React from "react";
import PropTypes from "prop-types";
import VerificationConnector from "./components/VerificationConnector";

const ConfirmScene = ({ email, verificationToken }) => (
  <React.Fragment>
    <section className="section">
      <VerificationConnector
        email={email}
        verificationToken={verificationToken}
      />
    </section>
  </React.Fragment>
);

ConfirmScene.propTypes = {
  email: PropTypes.string.isRequired,
  verificationToken: PropTypes.string.isRequired
};

export default ConfirmScene;
