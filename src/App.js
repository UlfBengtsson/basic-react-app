import React, { Component, Fragment } from "react";
import MyHeader from "./Components/MyHeader";
import MyFooter from "./Components/MyFooter";
import MyMainContent from "./Components/MyMainContent";

class App extends Component {
  state = {
    codeLang: ["C#", "Java", "Basic", "C++", "Assembler"]
  };

  render() {
    return (
      <Fragment>
        <MyHeader />

        <MyMainContent textList={this.state.codeLang} />

        <MyFooter />
      </Fragment>
    );
  }
}

export default App;
