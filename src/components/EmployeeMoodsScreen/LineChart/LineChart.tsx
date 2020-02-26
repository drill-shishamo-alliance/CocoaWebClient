import React from 'react';
import {
  ChartPosition,
  CustomContentOfToolTip,
  Border,
  Material,
  Svg,
  Horizontal,
} from './LineChartStyles';
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
import { iconMap } from './GetCauseIcon';

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

  const materialIcon = (iconName: string) => (
    <Material className={'material-icons'}>{iconName}</Material>
  );

  const svgIcon = (src: string) => <Svg src={src} />;

  const icon = (causeId: string) =>
    iconMap[causes[causeId].name].icon_path
      ? materialIcon(iconMap[causes[causeId].name].icon_path)
      : iconMap[causes[causeId].name].src && svgIcon(iconMap[causes[causeId].name].src);

  const CustomTooltip = (props: any) => {
    const { active, payload } = props;
    if (active && payload) {
      const moodId = payload[0].payload.moodId;
      const causeIds: string[] = payload[0].payload.causeIds;
      return (
        <CustomContentOfToolTip>
          <p className='label'>{moods[moodId].name}</p>
          {causeIds.length && <Border>原因</Border>}
          {causeIds.map((causeId, index) => {
            return (
              <div key={index}>
                {icon(causeId)}
                <Horizontal className='desc'>{causes[causeId].name}</Horizontal>
              </div>
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
