import React from "react";
import { storiesOf, addDecorator } from "@storybook/react";
import LoginForm from ".";
import GlobalStyle from "../../../../components/GlobalStyle";

const GlobalStylesDecorator = storyFn => (
  <div>
    <GlobalStyle />
    {storyFn()}
  </div>
);

addDecorator(GlobalStylesDecorator);

storiesOf("LoginForm", module).add("default", () => <LoginForm />);
