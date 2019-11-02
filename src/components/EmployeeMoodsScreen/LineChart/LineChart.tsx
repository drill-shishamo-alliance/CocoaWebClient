import React from 'react';
import styles from './MoodsLineChartStyles';
import {
  LineChart as LineChartRecharts,
  Line,
  YAxis,
  CartesianGrid,
  Tooltip,
  XAxis,
} from 'recharts';
import LineChartTickSvg from './MoodsLineChartTickSvg';
import { useSelector } from 'react-redux';
import RootState from 'src/states';

export type Props = {
  moodIds: string[];
};

const LineChart: React.FC<Props> = props => {
  const classes = styles();
  const moods = useSelector((state: RootState) => state.MoodsState);
  const data = props.moodIds.map(moodId => {
    return { 気分: moods[moodId].name };
  });

  const CustomizedTicks = (props: any) => {
    const { x, y, payload } = props;

    return <LineChartTickSvg x={x} y={y} tick={payload.value} />;
  };

  return (
    <div className={classes().chartPosition}>
      <LineChartRecharts
        width={950}
        height={200}
        data={data}
        margin={{
          top: 10,
          right: 15,
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
        <Line type='monotone' dataKey='気分' stroke='#2196f3' />
      </LineChartRecharts>
    </div>
  );
};

export default LineChart;
