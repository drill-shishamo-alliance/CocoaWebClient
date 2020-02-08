import React from 'react';
import { ChartPosition, CustomContentOfToolTip } from './LineChartStyles';
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
    if (moods[punchLog.mood_id].name === '未入力') {
      return {};
    } else {
      return {
        moodWeight: moods[punchLog.mood_id].weight,
        moodId: punchLog.mood_id,
        causeIds: punchLog.cause_ids,
      };
    }
  });

  const CustomizedTicks = (props: any) => {
    const { x, y, payload } = props;
    return <LineChartTickSvg x={x} y={y} tick={payload.value} />;
  };

  const CustomTooltip = (props: any) => {
    const { active, payload } = props;
    if (active && payload[0]) {
      const moodId = payload[0].payload.moodId;
      const causeIds: string[] = payload[0].payload.causeIds;
      return (
        <CustomContentOfToolTip>
          <p className='label'>{moods[moodId].name}</p>
          {causeIds.length && <p>(原因)</p>}
          {causeIds.map((causeId, index) => {
            return (
              <p className='desc' key={index}>
                {causes[causeId].name}
              </p>
            );
          })}
        </CustomContentOfToolTip>
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
          <Line type='monotone' dataKey='moodWeight' stroke='#2196f3' isAnimationActive={false} />
        </LineChartRecharts>
      </ChartPosition>
    </ResponsiveContainer>
  );
};

export default LineChart;
