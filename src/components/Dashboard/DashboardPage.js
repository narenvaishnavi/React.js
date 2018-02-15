import React from 'react';

import Doughnut from './doughnut';
import DynamicDoughnutExample from './dynamic-doughnut';
import PieExample from './pie';
import LineExample from './line';
import BarExample from './bar';
import HorizontalBarExample from './horizontalBar';
import RadarExample from './radar';
import PolarExample from './polar';
import BubbleExample from './bubble';
import ScatterExample from './scatter';
import MixedDataExample from './mix';
import LegendOptionsExample from './legend-options';
import LegendHandlersExample from './legend-handlers';

export default class App extends React.Component {
	render() {
		return (
			<div>
				<div className="col-sm-6">
					<Doughnut />
				</div>
				<div className="col-sm-6">
					<DynamicDoughnutExample />
				</div>
				<div className="col-sm-6">
					<PieExample />
				</div>
				
			</div>
		);
	}
}