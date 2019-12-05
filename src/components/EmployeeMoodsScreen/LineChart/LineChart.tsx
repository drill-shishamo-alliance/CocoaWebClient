import React from 'react';
import {
  LineChart as LineChartRecharts,
  Line,
  YAxis,
  CartesianGrid,
  Tooltip,
  XAxis,
  ResponsiveContainer,
} from 'recharts';
import LineChartTickSvg from './LineChartTickSvg';
import LineChartProps from './LineChartProps';
import { withStyles } from '@material-ui/styles';
import styles from './LineChartStyles';

class LineChart extends React.Component<LineChartProps> {
  render() {
    const { moodIds, moods, classes } = this.props;

    const data = moodIds.map(moodId => {
      return { 気分: moods[moodId].weight };
    });

    console.log(data);
    const CustomizedTicks = (props: any) => {
      const { x, y, payload } = props;
      return <LineChartTickSvg x={x} y={y} tick={payload.value} />;
    };

    return (
      <ResponsiveContainer width='100%' height={200} className={classes.chartPosition}>
        <LineChartRecharts
          data={data}
          margin={{
            top: 10,
            right: 70,
            left: 35,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray='3 3' />
          <XAxis dataKey='name' tickLine={false} />
          <YAxis
            domain={['dataMin', 'dataMax']}
            ticks={[0, 1, 2, 3, 4, 5]}
            tick={<CustomizedTicks />}
          />
          <Tooltip />
          <Line type='monotone' dataKey='気分' stroke='#2196f3' isAnimationActive={false} />
        </LineChartRecharts>
      </ResponsiveContainer>
    );
  }
}

export default withStyles(styles)(LineChart);
