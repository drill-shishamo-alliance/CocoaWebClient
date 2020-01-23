import React from 'react';
import { ChartPosition, CustomContentOfToolTip } from './BarChartStyles';
import {
  BarChart as BarChartRecharts,
  Bar,
  YAxis,
  CartesianGrid,
  Tooltip,
  XAxis,
  ResponsiveContainer,
} from 'recharts';
import { useSelector } from 'react-redux';
import RootState from 'src/states';
import { MoodsRatio } from 'src/states/ListMoodOfDepartment/ListMoodOfDepartment';
import BarChartTickSvg from './BarChartTickSvg';

type Props = {
  moodsRatio: MoodsRatio;
};

type CausesRatio = {
  id: string;
  ratio: number;
};

const BarChart: React.FC<Props> = props => {
  const { moodsRatio } = props;
  const moods = useSelector<RootState, RootState['MoodsState']>(state => state.MoodsState);
  const causes = useSelector<RootState, RootState['CausesState']>(state => state.CausesState);

  const data = Object.values(moodsRatio).map((moodRatio, index) => {
    if (moodRatio.id === 'mood_id0') {
      return {};
    } else {
      return { weight: index + 1, 気分: moodRatio.ratio, 原因: moodRatio.causes_ratio };
    }
  });

  const CustomizedTicks = (props: any) => {
    const { x, y, payload } = props;
    return <BarChartTickSvg x={x} y={y} tick={payload.value} />;
  };

  const CustomTooltip = (props: any) => {
    const { active, payload } = props;
    if (active) {
      return (
        <CustomContentOfToolTip>
          {Object.values(moods).map((mood, index) => {
            if (payload[0].payload.weight === mood.weight) {
              return <p key={index}>{mood.name}</p>;
            }
            return '';
          })}
          {payload[0].payload['原因'] &&
            Object.values(payload[0].payload['原因']).map((value, index) => {
              return (
                <p key={index}>{`${causes[(value as CausesRatio).id].name}：${
                  payload[0].payload['原因'][(value as CausesRatio).id].ratio
                }%`}</p>
              );
            })}
        </CustomContentOfToolTip>
      );
    }

    return null;
  };

  return (
    <ResponsiveContainer width='100%' height={200}>
      <ChartPosition>
        <BarChartRecharts data={data}>
          <CartesianGrid strokeDasharray='3 3' />
          <XAxis
            dataKey='weight'
            // tickLine={false}
            ticks={[1, 2, 3, 4, 5]}
            tick={<CustomizedTicks />}
          />
          <YAxis domain={[0, 100]} unit='%' />
          <Tooltip content={<CustomTooltip />} />
          <Bar barSize={40} dataKey='気分' fill='#2196f3' />
        </BarChartRecharts>
      </ChartPosition>
    </ResponsiveContainer>
  );
};

export default BarChart;
