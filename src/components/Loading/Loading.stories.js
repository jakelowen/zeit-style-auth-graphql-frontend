import React from "react";
import { storiesOf, addDecorator } from "@storybook/react";
import Loading from ".";
import GlobalStyle from "../GlobalStyle";

const GlobalStylesDecorator = storyFn => (
  <div>
    <GlobalStyle />
    {storyFn()}
  </div>
);

addDecorator(GlobalStylesDecorator);

storiesOf("Loading", module).add("default", () => (
  <div style={{ width: "80%", margin: "10px auto 10px auto" }}>
    <Loading />
  </div>
));
