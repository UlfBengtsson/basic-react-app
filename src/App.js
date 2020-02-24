import React, { Component, Fragment } from "react";
import MyHeader from "./Components/MyHeader";
import MyFooter from "./Components/MyFooter";
import MyMainContent from "./Components/MyMainContent";

class App extends Component {
  state = {
    codeLang: ["C#", "Java", "Basic", "C++", "Assembler"],
    newLang: ""
  };

  /*
  handleNewLang = event => {
    console.log(event.target.value);
    const value = event.target.value;

    this.setState({ newLang: value });

  }
  */
  handleChange = event => {
    const { name, value } = event.target
  
    this.setState({
      [name]: value,
    })
  }

  handleSubmit = () => {
    
    const newCodeLang = this.state.codeLang;

    newCodeLang.push(this.state.newLang);

    this.setState({codeLang: newCodeLang, newLang: ""});
  }

  render() {
    return (
      <Fragment>
        <MyHeader />

        <MyMainContent textList={this.state.codeLang} />

        <div>
          <input name="newLang" type="text" value={this.state.newLang} onChange={this.handleChange} />
          <button onClick={this.handleSubmit}>Save</button>
        </div>

        <MyFooter />
      </Fragment>
    );
  }
}

export default App;
