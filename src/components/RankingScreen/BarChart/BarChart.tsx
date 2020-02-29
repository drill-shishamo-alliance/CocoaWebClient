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
  tableItemIndex: number;
};

const BarChart: React.FC<Props> = props => {
  const { moodsRatio, tableItemIndex } = props;
  const moods = useSelector<RootState, RootState['MoodsState']>(state => state.MoodsState);
  const isFirstTableItem: boolean = tableItemIndex === 0 ? true : false;

  const data = Object.values(moodsRatio).map((moodRatio, index) => {
    if (moods[moodRatio.id].name === '未記入') {
      return {};
    } else {
      return {
        weight: index + 1,
        moodName: moods[moodRatio.id].name,
        moodRatio: moodRatio.ratio,
        causesRatio: moodRatio.causes_ratio,
      };
    }
  });

  const CustomizedTicks = (props: any) => {
    const { x, y, payload } = props;
    return <BarChartTickSvg x={x} y={y} tick={payload.value} />;
  };

  const CustomTooltip = (props: any) => {
    const { active, payload } = props;

    if (active) {
      const moodRatio: number = payload[0].payload['moodRatio'];
      const moodName: string = payload[0].payload['moodName'];
      const causesRatio: CausesRatio = payload[0].payload['causesRatio'];
      return (
        <CustomContentOfToolTip>
          <p>{`${moodName}：${moodRatio}%`}</p>
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
          <Tooltip
            content={<CustomTooltip />}
            wrapperStyle={isFirstTableItem ? { top: 200, zIndex: 1 } : { top: -180, zIndex: 1 }}
          />
          <Bar barSize={40} dataKey='moodRatio' fill='#2196f3' />
        </BarChartRecharts>
      </ChartPosition>
    </ResponsiveContainer>
  );
};

export default BarChart;
