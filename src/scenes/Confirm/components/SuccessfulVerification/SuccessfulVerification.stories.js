import React from "react";
import { storiesOf, addDecorator } from "@storybook/react";
import SuccessfulVerification from ".";
import GlobalStyle from "../../../../components/GlobalStyle";

const GlobalStylesDecorator = storyFn => (
  <div>
    <GlobalStyle />
    {storyFn()}
  </div>
);

addDecorator(GlobalStylesDecorator);

storiesOf("SuccessfulVerification", module).add("default", () => (
  <SuccessfulVerification />
));
