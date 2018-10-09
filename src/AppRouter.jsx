import React from "react";
import { Router } from "@reach/router";
import Loadable from "react-loadable";
import Loading from "./components/Loading";
import Home from "./scenes/Home";

const AsyncConfirm = Loadable({
  loader: () => import("./scenes/Confirm"),
  loading: Loading
});

const AsyncDashboard = Loadable({
  loader: () => import("./scenes/Dashboard"),
  loading: Loading
});

const AppRouter = () => (
  <Router>
    <Home path="/" />
    <AsyncConfirm path="verify/:email/:verificationToken" />
    <AsyncDashboard path="dashboard" />
  </Router>
);

export default AppRouter;
