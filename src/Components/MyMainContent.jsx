import React, { Component } from "react";

class MyMainContent extends Component {
  render() {
    const listElements = this.props.textList.map((row, index) => (
      <li key={"textId" + index}>
        <p>{row}</p>
      </li>
    ));

    return (
      <div className="main-content">
        <h1>Hello web</h1>

        <ul>{listElements}</ul>
      </div>
    );
  }
}

export default MyMainContent;
