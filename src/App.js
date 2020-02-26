import React, { Component, Fragment } from "react";
import MyHeader from "./Components/MyHeader";
import MyFooter from "./Components/MyFooter";
import MyMainContent from "./Components/MyMainContent";
import MyNewLang from "./Components/MyNewLang";
import MyWeather from "./Components/MyWeather";

class App extends Component {
  state = {
    codeLang: ["C#", "Java", "Basic", "C++", "Assembler"],
    newLang: "",
    weatherForecasts: [],
    hasFetched: false
  };

  componentDidMount()
  {
    fetch('https://192.168.1.131:5001/WeatherForecast')//Request part
        .then(response => response.json())             //Response part
        .then(response => this.setState({ weatherForecasts: response, hasFetched: true }));
  }
  
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

    this.setState({codeLang: newCodeLang, newLang: ""});// also reset the newLang state so its ready for new input
  }

  render() {

    let weather = "loading...";
    
    if(this.state.hasFetched)
    {
      weather = <MyWeather weatherList={this.state.weatherForecasts} />;
    }

    return (
      <Fragment>
        <MyHeader />

        {weather}

        <MyMainContent textList={this.state.codeLang} />

        <MyNewLang newLang={this.state.newLang} handleChange={this.handleChange} handleSubmit={this.handleSubmit} />

        {/* <MyNewLang newLang={this.state.newLang} handleChange={this.handleChange} handleSubmit={this.handleSubmit} /> */}

        <MyFooter />
      </Fragment>
    );
  }
}

export default App;
