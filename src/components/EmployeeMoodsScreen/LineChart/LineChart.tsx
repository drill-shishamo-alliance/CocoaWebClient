import React from 'react';
import {
  ChartSize,
  ChartPosition,
  CustomContentOfToolTip,
  Border,
  Margin,
  Div,
} from './LineChartStyles';
import {
  LineChart as LineChartRecharts,
  Line,
  YAxis,
  CartesianGrid,
  Tooltip,
  XAxis,
} from 'recharts';
import LineChartTickSvg from './LineChartTickSvg';
import { PunchLog } from 'src/states/ListMoodOfEmployee/ListMoodOfEmployee';
import { useSelector } from 'react-redux';
import RootState from 'src/states';
import GetIcon from 'src/utilsComponent/Icon/GetIcon';

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
    if (active && payload !== null && payload.length) {
      const moodId: string = payload[0].payload.moodId;
      const causeIds: string[] = payload[0].payload.causeIds;
      return (
        <CustomContentOfToolTip>
          <p className='label'>{moods[moodId].name}</p>
          {causeIds.length !== 0 && <Border>原因</Border>}
          {causeIds.map((causeId, index) => {
            return (
              <Div key={index}>
                <GetIcon causeName={causes[causeId].name} />
                <Margin className='desc'>{causes[causeId].name}</Margin>
              </Div>
            );
          })}
        </CustomContentOfToolTip>
      );
    }

    return null;
  };

  return (
    <ChartSize>
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
    </ChartSize>
  );
};

export default LineChart;
