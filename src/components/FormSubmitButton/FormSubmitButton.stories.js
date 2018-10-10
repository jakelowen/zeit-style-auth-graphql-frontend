import React from "react";
import { storiesOf } from "@storybook/react";
import FormSubmitButton from ".";

storiesOf("FormSubmitButton", module)
  .add("default", () => (
    <div style={{ width: "80%", margin: "10px auto 10px auto" }}>
      <FormSubmitButton isSubmitting={false} value="A button!" />
    </div>
  ))
  .add("Submitting", () => (
    <div style={{ width: "80%", margin: "10px auto 10px auto" }}>
      <FormSubmitButton isSubmitting value="A button!" />
    </div>
  ));
