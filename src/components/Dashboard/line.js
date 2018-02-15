import React from 'react';
import {Line} from 'react-chartjs-2';

const data = {
  labels: ['NBA',
  'MLB',
  'NFL',
  'NHL',
  'PGA'],
  datasets: [
    {
      label: 'Score',
      fill: false,
      lineTension: 0.1,
      backgroundColor: '#3366CC',
      borderColor: '#3366CC',
      borderCapStyle: 'butt',
      borderDash: [],
      borderDashOffset: 0.0,
      borderJoinStyle: 'miter',
      pointBorderColor: '#3366CC',
      pointBackgroundColor: '#fff',
      pointBorderWidth: 1,
      pointHoverRadius: 5,
      pointHoverBackgroundColor: '#3366CC',
      pointHoverBorderColor: '#3366CC',
      pointHoverBorderWidth: 2,
      pointRadius: 1,
      pointHitRadius: 10,
      data: [65/2, 59/5, 80/9, 81/4, 56/4]
    }
  ]
};

export default React.createClass({
  displayName: 'LineExample',

  render() {
    return (
      <div>
        <h4>Line Example</h4>
        <Line data={data} />
      </div>
    );
  }
});
