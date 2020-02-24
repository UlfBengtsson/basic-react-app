import React, { Component } from 'react';

class MyNewLang extends Component {

    render() {
        return (
        <div>
          <input name="newLang" type="text" value={this.props.newLang} onChange={this.props.handleChange} />
          <button onClick={this.props.handleSubmit}>Save</button>
        </div>
        );
    }
}

export default MyNewLang;