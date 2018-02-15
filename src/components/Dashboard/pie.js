import React from 'react';
import {Pie} from 'react-chartjs-2';

const data = {
	labels: [
		'NBA',
		'MLB',
		'NFL',
		'NHL',
		'PGA'
	],
	datasets: [{
		data: [300, 50, 100,150,25],
		backgroundColor: [
			'#3366CC', '#DC3912', '#FF9900', '#109618', '#990099'
		],
		hoverBackgroundColor: [
			'#3366CC', '#DC3912', '#FF9900', '#109618', '#990099'
		]
	}]
};

export default React.createClass({
  displayName: 'PieExample',

  render() {
    return (
      <div>
        <h4>Pie Example</h4>
        <Pie data={data} />
      </div>
    );
  }
});
