import React, { Component, Fragment } from "react";
import MyHeader from "./Components/MyHeader";
import MyFooter from "./Components/MyFooter";

class App extends Component {
  render() {
    return (
      <Fragment>
        <MyHeader />
        <MyFooter />
      </Fragment>
    );
  }
}

export default App;
