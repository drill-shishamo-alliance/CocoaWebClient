import React from 'react';
import { PieChart as PieChartRecharts, Pie, Cell } from 'recharts';
import RootState from 'src/states';
import { useSelector } from 'react-redux';

type Props = {
  causesRatio: any;
};

type CauseRatio = {
  id: string;
  ratio: number;
};

const PieChart: React.FC<Props> = props => {
  const { causesRatio } = props;
  const causes = useSelector<RootState, RootState['CausesState']>(state => state.CausesState);

  const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042'];
  const RADIAN = Math.PI / 180;

  const data = Object.values(causesRatio).map((val, index) => {
    return {
      name: causes[(val as CauseRatio).id].name,
      value: causesRatio[(val as CauseRatio).id].ratio,
    };
  });

  const renderCustomizedLabel = (props: any) => {
    const { cx, cy, midAngle, innerRadius, outerRadius, percent } = props;
    const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
    const x = cx + radius * Math.cos(-midAngle * RADIAN);
    const y = cy + radius * Math.sin(-midAngle * RADIAN);

    return (
      <text
        x={x}
        y={y}
        fill='white'
        textAnchor={x > cx ? 'start' : 'end'}
        dominantBaseline='central'
      >
        {`${(percent * 100).toFixed(0)}%`}
      </text>
    );
  };
  return (
    <PieChartRecharts width={200} height={110}>
      <Pie
        data={data}
        cx={100}
        cy={50}
        startAngle={90}
        endAngle={-270}
        labelLine={false}
        label={renderCustomizedLabel}
        outerRadius={50}
        fill='#8884d8'
        dataKey='value'
      >
        {data.map((entry, index) => (
          <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
        ))}
      </Pie>
    </PieChartRecharts>
  );
};

export default PieChart;
