import React from "react";
import { storiesOf, addDecorator } from "@storybook/react";
import AwaitingConfirmationScreen from ".";
import GlobalStyle from "../../../../components/GlobalStyle";

const GlobalStylesDecorator = storyFn => (
  <div>
    <GlobalStyle />
    {storyFn()}
  </div>
);

addDecorator(GlobalStylesDecorator);

storiesOf("AwaitingConfirmationScreen", module).add("default", () => (
  <AwaitingConfirmationScreen
    email="foo@test.com"
    securityCode="23 suprised ocelots"
  />
));
