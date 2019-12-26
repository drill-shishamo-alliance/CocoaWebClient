import React from 'react';
import { ChartPosition } from './LineChartStyles';
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
import { PunchLog } from 'src/states/ListMoodOfEmployee/ListMoodOfEmployee';
import { useSelector } from 'react-redux';
import RootState from 'src/states';

type Props = {
  punchLogs: PunchLog[];
};

const LineChart: React.FC<Props> = props => {
  const { punchLogs } = props;
  const moods = useSelector<RootState, RootState['MoodsState']>(state => state.MoodsState);
  const causes = useSelector<RootState, RootState['CausesState']>(state => state.CausesState);

  const data = punchLogs.map(punchLog => {
    if (punchLog.mood_id === 'mood_id0') {
      return {};
    } else {
      return { 気分: moods[punchLog.mood_id].weight, 原因: causes[punchLog.cause_id].name };
    }
  });

  const CustomizedTicks = (props: any) => {
    const { x, y, payload } = props;
    return <LineChartTickSvg x={x} y={y} tick={payload.value} />;
  };

  const CustomTooltip = (props: any) => {
    const { active, payload } = props;
    if (active) {
      return (
        <CustomTooltip>
          {payload[0] && <p className='label'>{moods[`mood_id${payload[0].value}`].name}</p>}
          {payload[0] && <p className='desc'>原因：{payload[0].payload['原因']}</p>}
        </CustomTooltip>
      );
    }

    return null;
  };

  return (
    <ResponsiveContainer width='92%' height={200}>
      <ChartPosition>
        <LineChartRecharts
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
            ticks={[1, 2, 3, 4, 5]}
            tick={<CustomizedTicks />}
          />
          <Tooltip content={<CustomTooltip />} />
          <Line type='monotone' dataKey='気分' stroke='#2196f3' isAnimationActive={false} />
        </LineChartRecharts>
      </ChartPosition>
    </ResponsiveContainer>
  );
};

export default LineChart;
