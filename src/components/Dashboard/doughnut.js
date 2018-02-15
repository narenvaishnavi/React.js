import React from 'react';
import {Doughnut} from 'react-chartjs-2';

const data = {
	labels: [
		'NBA',
		'MLB',
		'NFL',
		'NHL',
		'PGA'
	],
	datasets: [{
		data: [300, 50, 100,70,110],
		backgroundColor: [
			'#3366CC', '#DC3912', '#FF9900', '#109618', '#990099'
		],
		hoverBackgroundColor: [
			'#3366CC', '#DC3912', '#FF9900', '#109618', '#990099'
		]
	}]
};

export default React.createClass({
  displayName: 'DoughnutExample',

  render() {
    return (
      <div >
        <h4>Doughnut Example</h4>
        <Doughnut data={data} />
      </div>
    );
  }
});
