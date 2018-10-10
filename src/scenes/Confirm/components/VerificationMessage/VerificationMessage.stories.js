import React from "react";
import { storiesOf } from "@storybook/react";
import { action } from "@storybook/addon-actions";
import VerificationMessage from ".";

storiesOf("Verification Message", module)
  .add("Loading", () => (
    <VerificationMessage
      submitToConnector={action("Triggered Mutation Mock")}
      loading
    />
  ))
  .add("Error", () => (
    <VerificationMessage
      submitToConnector={action("Triggered Mutation Mock")}
      error="This is an error message"
    />
  ))
  .add("Success", () => (
    <VerificationMessage
      submitToConnector={action("Triggered Mutation Mock")}
      data={{
        verify: {
          success: true,
          message: "This message is passed directly though from server"
        }
      }}
    />
  ))
  .add("Load then Fail", () => (
    <VerificationMessage
      submitToConnector={action("Triggered Mutation Mock")}
      data={{
        verify: {
          success: false,
          message: "This message is passed directly though from server"
        }
      }}
    />
  ));
