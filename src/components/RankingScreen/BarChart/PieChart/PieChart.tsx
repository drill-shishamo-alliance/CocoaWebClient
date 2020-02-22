import React from 'react';
import { PieChart as PieChartRecharts, Pie, Cell } from 'recharts';
import RootState from 'src/states';
import { useSelector } from 'react-redux';

type CauseRatio = {
  id: string;
  ratio: number;
};

type CausesRatio = {
  [causeId: string]: CauseRatio;
};

type Props = {
  causesRatio: CausesRatio;
};

const PieChart: React.FC<Props> = props => {
  const { causesRatio } = props;
  const causes = useSelector<RootState, RootState['CausesState']>(state => state.CausesState);

  const pieChartWidth = 260;
  const pieChartHeight = 155;
  const colors = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042'];

  const data = Object.values(causesRatio).map(causeRatio => {
    return {
      name: causes[causeRatio.id].name,
      value: causesRatio[causeRatio.id].ratio,
    };
  });

  const renderCustomizedLabel = (props: any) => {
    const causeName = props.payload.payload.name;
    return causeName;
  };

  return (
    <PieChartRecharts width={pieChartWidth} height={pieChartHeight}>
      <Pie
        data={data}
        cx={pieChartWidth / 2}
        cy={pieChartHeight / 2}
        startAngle={450}
        endAngle={90}
        outerRadius={50}
        dataKey='value'
        label={renderCustomizedLabel}
        isAnimationActive={false}
      >
        {data.map((_, index) => (
          <Cell key={`cell-${index}`} fill={colors[index % colors.length]} />
        ))}
      </Pie>
    </PieChartRecharts>
  );
};

export default PieChart;
