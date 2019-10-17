import React from 'react';
import { PieChart, Pie, Tooltip, Cell } from 'recharts';
import { Typography } from '@material-ui/core';
import styles from './PieGraphStyles';

type PieGraphData = {
  name: string;
  value: number;
  unit: string;
};

export type PieGraphDataProps = {
  data: PieGraphData[];
};

const PieGraph = (props: PieGraphDataProps) => {
  const { data } = props;
  const classes = styles();
  const COLORS = ['#ff0000', '#7E8B8C', '#2880BA', '#E57D22', '#1ABC9C', '#EF7079']; // 円グラフで使用する色

  const CustomTooltip = (props: any) => {
    const { active, payload } = props;

    if (active) {
      return (
        <div className={classes().customTooltip}>
          <Typography
            className={classes().label}
            variant='h6'
          >{`${payload[0].name}: ${payload[0].value}日`}</Typography>
        </div>
      );
    }

    return null;
  };

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
        fontSize='20'
      >
        {percent > 0 ? `${(percent * 100).toFixed(0)}%` : ''}
      </text>
    );
  };

  return (
    <PieChart width={600} height={600}>
      <Pie
        data={data}
        cx={300}
        cy={200}
        labelLine={false}
        label={renderCustomizedLabel}
        outerRadius={200}
        fill='#8884d8'
        dataKey='value'
      >
        {data.map((entry, index: number) => (
          <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
        ))}
      </Pie>
      <Tooltip content={<CustomTooltip />} />
    </PieChart>
  );
};

export default PieGraph;
