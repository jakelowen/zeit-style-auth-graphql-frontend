/* eslint-disable react/jsx-filename-extension */

import React from "react";
import ReactDOM from "react-dom";
import { ApolloProvider } from "react-apollo";
import client from "./ApolloClient";
import AppRouter from "./AppRouter";
import GlobalStyle from "./components/GlobalStyle";
import "tachyons/css/tachyons.min.css";

ReactDOM.render(
  <ApolloProvider client={client}>
    <GlobalStyle />
    <AppRouter />
  </ApolloProvider>,
  document.getElementById("app")
);
