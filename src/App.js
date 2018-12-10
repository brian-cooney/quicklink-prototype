import React, { Component } from "react";

import GridTest from "./widgets/rebass-grid/GridTest";
import { Formik } from "formik";
import { Router, Link } from "@reach/router";
import NavBar from "./widgets/NavBar/NavBar";

import "./App.scss";

import { library } from "@fortawesome/fontawesome-svg-core";
import {
  faStroopwafel,
  faInfoCircle,
  faCoffee
} from "@fortawesome/free-solid-svg-icons";
import "./widgets/rebass-grid/style.css";
import EditForm from "./widgets/rebass-grid/EditForm";
import FormTest from "./widgets/Formik/Formik";

library.add(faStroopwafel, faInfoCircle, faCoffee);

class App extends Component {
  state = {};
  render() {
    return (
      <div>
        <NavBar />
        <Router>
          <Home path="/" />
          <EditForm path="/editform" />
          <GridTest path="/gridtest" />
          <FormTest path="/formik" />
        </Router>
        {/* <Router>
          <GridTest path="/dashboard" cardTitle="Brand Management" />
          <EditForm />
        </Router> */}
      </div>
    );
  }
}

export default App;

const Home = () => (
  <div>
    <h2>Default</h2>
  </div>
);

const Dashboard = () => (
  <div>
    <h2>Dashboard</h2>
  </div>
);
