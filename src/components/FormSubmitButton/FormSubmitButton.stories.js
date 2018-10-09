import React from "react";
import { storiesOf, addDecorator } from "@storybook/react";
import FormSubmitButton from ".";
import GlobalStyle from "../GlobalStyle";

const GlobalStylesDecorator = storyFn => (
  <div>
    <GlobalStyle />
    {storyFn()}
  </div>
);

addDecorator(GlobalStylesDecorator);

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
