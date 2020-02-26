import React, { Component } from 'react';

class MyWeather extends Component {
    render() {

        const listElements = this.props.weatherList.map((row, index) => (
            <tr key={"weatherId" + index}>
              <td>{row.date}</td>
              <td>{row.summary}</td>
              <td>{row.temperatureC}</td>
              <td>{row.temperatureF}</td>
            </tr>
          ));

        return (
            <table>
                <thead>
                    <th>Date</th>
                    <th>Summary</th>
                    <th>C</th>
                    <th>F</th>
                </thead>
                <tbody>
                    {listElements}
                </tbody>
            </table>
        );
    }
}

export default MyWeather;