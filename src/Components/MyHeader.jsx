import React, { Component } from "react";

class MyHeader extends Component {
  render() {
    return (
      <header>
        <h1>logo</h1>
        <ul>
          <li>
            <a href="http://">Link 1</a>
          </li>
          <li>
            <a href="http://">Link 2</a>
          </li>
          <li>
            <a href="http://">Link 3</a>
          </li>
        </ul>
      </header>
    );
  }
}

export default MyHeader;
