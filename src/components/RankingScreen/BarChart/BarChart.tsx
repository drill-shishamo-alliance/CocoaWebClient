import React from 'react';
import { ChartPosition, CustomContentOfToolTip, Border } from './BarChartStyles';
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
import PieChart, { CausesRatio } from './PieChart/PieChart';

type Props = {
  moodsRatio: MoodsRatio;
};

const BarChart: React.FC<Props> = props => {
  const { moodsRatio } = props;
  const moods = useSelector<RootState, RootState['MoodsState']>(state => state.MoodsState);

  const data = Object.values(moodsRatio).map((moodRatio, index) => {
    if (moods[moodRatio.id].name === '未記入') {
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
      const moodRatio: number = payload[0].value;
      const causeWeight: number = payload[0].payload.weight;
      const causesRatio: CausesRatio = payload[0].payload['原因'];
      return (
        <CustomContentOfToolTip>
          {Object.values(moods).map((mood, index) => {
            if (causeWeight === mood.weight) {
              return <p key={index}>{`${mood.name}：${moodRatio}%`}</p>;
            }
          })}
          {moodRatio !== 0 && (
            <div>
              <Border>原因の内訳</Border>
              {causesRatio !== {} && <PieChart causesRatio={causesRatio} />}
            </div>
          )}
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
          <Tooltip content={<CustomTooltip />} wrapperStyle={{ top: -20 }} />
          <Bar barSize={40} dataKey='気分' fill='#2196f3' />
        </BarChartRecharts>
      </ChartPosition>
    </ResponsiveContainer>
  );
};

export default BarChart;
