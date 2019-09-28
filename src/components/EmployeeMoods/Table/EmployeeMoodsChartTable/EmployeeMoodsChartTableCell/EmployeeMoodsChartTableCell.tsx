import * as React from 'react';
import EmployeeMoodsChartTableCellProps from './EmployeeMoodsChartTableCellProps';
import styles from './EmployeeMoodsChartTableCellStyles';
import { withStyles } from '@material-ui/styles';
import { LineChart, Line, YAxis, CartesianGrid, Tooltip, XAxis } from 'recharts';
import EmployeeMoodsChartTableCellTickSvg from '../EmployeeMoodsChartTableCellTickSvg/EmployeeMoodsChartTableCellTickSvg';

class EmployeeMoodsChartTableCell extends React.Component<EmployeeMoodsChartTableCellProps> {
  render() {
    const { classes, weekMoods, moods } = this.props;

    const attendanceMondayMoodIndex = moods.findIndex(
      mood => mood.id === weekMoods.monday.attendance.mood_id
    );

    const attendanceMondayMoodIconWeight =
      attendanceMondayMoodIndex >= 0 ? moods[attendanceMondayMoodIndex].weight : 0;

    const attendanceTuesdayMoodIndex = moods.findIndex(
      mood => mood.id === weekMoods.tuesday.attendance.mood_id
    );

    const attendanceTuesdayMoodIconWeight =
      attendanceTuesdayMoodIndex >= 0 ? moods[attendanceTuesdayMoodIndex].weight : 0;

    const attendanceWednesdayMoodIndex = moods.findIndex(
      mood => mood.id === weekMoods.wednesday.attendance.mood_id
    );

    const attendanceWednesdayMoodIconWeight =
      attendanceWednesdayMoodIndex >= 0 ? moods[attendanceWednesdayMoodIndex].weight : 0;

    const attendanceThursdayMoodIndex = moods.findIndex(
      mood => mood.id === weekMoods.thursday.attendance.mood_id
    );

    const attendanceThursdayMoodIconWeight =
      attendanceThursdayMoodIndex >= 0 ? moods[attendanceThursdayMoodIndex].weight : 0;

    const attendanceFridayMoodIndex = moods.findIndex(
      mood => mood.id === weekMoods.friday.attendance.mood_id
    );

    const attendanceFridayMoodIconWeight =
      attendanceFridayMoodIndex >= 0 ? moods[attendanceFridayMoodIndex].weight : 0;

    const data = [
      {
        気分: attendanceMondayMoodIconWeight,
      },
      {
        気分: attendanceTuesdayMoodIconWeight,
      },
      {
        気分: attendanceWednesdayMoodIconWeight,
      },
      {
        気分: attendanceThursdayMoodIconWeight,
      },
      {
        気分: attendanceFridayMoodIconWeight,
      },
    ];

    const CustomizedTicks = (props: any) => {
      const { x, y, payload } = props;

      return <EmployeeMoodsChartTableCellTickSvg x={x} y={y} tick={payload.value} />;
    };

    return (
      <div className={classes.chartPosition}>
        <LineChart
          width={950}
          height={200}
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
            ticks={[0, 1, 2, 3, 4, 5]}
            tick={<CustomizedTicks />}
          />
          <Tooltip />
          <Line type='monotone' dataKey='気分' stroke='#2196f3' />
        </LineChart>
      </div>
    );
  }
}

export default withStyles(styles)(EmployeeMoodsChartTableCell);
