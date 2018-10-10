import { configure, addDecorator } from "@storybook/react";
import React from "react";
import GlobalStyle from "../src/components/GlobalStyle";

// automatically import all files ending in *.stories.js
const req = require.context("../src", true, /.stories.js$/);
function loadStories() {
  req.keys().forEach(filename => req(filename));
}

const GlobalStylesDecorator = storyFn => (
  <div>
    <GlobalStyle />
    {storyFn()}
  </div>
);

addDecorator(GlobalStylesDecorator);

configure(loadStories, module);
