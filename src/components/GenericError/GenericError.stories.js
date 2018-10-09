import React from "react";
import { storiesOf, addDecorator } from "@storybook/react";
import GenericError from ".";
import GlobalStyle from "../GlobalStyle";

const GlobalStylesDecorator = storyFn => (
  <div>
    <GlobalStyle />
    {storyFn()}
  </div>
);

addDecorator(GlobalStylesDecorator);

storiesOf("Generic Error", module).add("default", () => (
  <div style={{ width: "80%", margin: "10px auto 10px auto" }}>
    <GenericError />
  </div>
));
