import * as React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Props from './JuniorFeelingsDetailsProps';
import styles from './JuniorFeelingsDetatilsStyles';
import { PieChart, Pie, Cell } from 'recharts';

class JuniorFeelingsDetails extends React.Component<Props> {
  render() {
    const { juniorFeelingsState, feelings } = this.props;
    const { selectJunior } = juniorFeelingsState.details;

    const index: number[] = [];
    let veryDissatisfiedCount = 0;
    let dissatisfiedCount = 0;
    let faceCount = 0;
    let satisfiedCount = 0;
    let verySatisfiedCount = 0;
    let badCount = 0;

    selectJunior &&
      Object.values(selectJunior.week_feelings).map(day =>
        index.push(feelings.findIndex(f => f.id === day.attendance.feeling_id))
      );

    index.map(i =>
      i === 0
        ? veryDissatisfiedCount++
        : 0 || i === 1
        ? dissatisfiedCount++
        : 0 || i === 2
        ? faceCount++
        : 0 || i === 3
        ? satisfiedCount++
        : 0 || i === 4
        ? verySatisfiedCount++
        : 0 || i < 0
        ? badCount++
        : 0
    );

    const data = [
      { name: '最悪', value: veryDissatisfiedCount },
      { name: '悪い', value: dissatisfiedCount },
      { name: '普通', value: faceCount },
      { name: '良い', value: satisfiedCount },
      { name: '最高', value: verySatisfiedCount },
    ];

    const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042'];

    const RADIAN = Math.PI / 180;
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
          {percent > 0 ? `${(percent * 100).toFixed(0)}%` : ''}
        </text>
      );
    };

    return (
      <PieChart width={400} height={400}>
        <Pie
          data={data}
          cx={200}
          cy={200}
          labelLine={false}
          label={renderCustomizedLabel}
          outerRadius={80}
          fill='#8884d8'
          dataKey='value'
        >
          {data.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
          ))}
        </Pie>
      </PieChart>
    );
  }
}

export default withStyles(styles)(JuniorFeelingsDetails);
