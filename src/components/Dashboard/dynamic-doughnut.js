import React from 'react';
import {Doughnut} from 'react-chartjs-2';

function getRandomInt (min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

const getState = () => ({
  labels: [
    'NBA',
		'MLB',
		'NFL',
		'NHL',
		'PGA'
  ],
  datasets: [{
    data: [getRandomInt(50, 200), getRandomInt(100, 150), getRandomInt(150, 250), getRandomInt(50, 250),getRandomInt(10, 250)],
    backgroundColor: [
      '#3366CC', '#DC3912', '#FF9900', '#109618', '#990099'
    ],
    hoverBackgroundColor: [
      '#3366CC', '#DC3912', '#FF9900', '#109618', '#990099'
    ]
  }]
});

export default React.createClass({
  displayName: 'DynamicDoughnutExample',

	getInitialState() {
		return getState();
	},

	componentWillMount() {
		setInterval(() => {
			this.setState(getState());
		}, 5000);
	},

  render() {
    return (
      <div>
        <h4>Dynamicly refreshed Doughnut Example</h4>
        <Doughnut data={this.state} />
      </div>
    );
  }
});
