import * as React from 'react';
import JuniorFeelingsChartTableCellProps from './JuniorFeelingsChartTableCellProps';
import styles from './JuniorFeelingsChartTableCellStyles';
import { withStyles } from '@material-ui/styles';
import { LineChart, Line, YAxis, CartesianGrid, Tooltip, XAxis } from 'recharts';
import JuniorFeelingsChartTableCellTickSvg from '../JuniorFeelingsChartTableCellTickSvg/JuniorFeelingsChartTableCellTickSvg';

class JuniorFeelingsChartTableCell extends React.Component<JuniorFeelingsChartTableCellProps> {
  render() {
    const { classes, weekFeelings, feelings } = this.props;

    const attendanceMondayFeelingIndex = feelings.findIndex(
      feeling => feeling.id === weekFeelings.monday.attendance.feeling_id
    );

    const attendanceMondayFeelingIconWeight =
      attendanceMondayFeelingIndex >= 0 ? feelings[attendanceMondayFeelingIndex].weight : 0;

    const attendanceTuesdayFeelingIndex = feelings.findIndex(
      feeling => feeling.id === weekFeelings.tuesday.attendance.feeling_id
    );

    const attendanceTuesdayFeelingIconWeight =
      attendanceTuesdayFeelingIndex >= 0 ? feelings[attendanceTuesdayFeelingIndex].weight : 0;

    const attendanceWednesdayFeelingIndex = feelings.findIndex(
      feeling => feeling.id === weekFeelings.wednesday.attendance.feeling_id
    );

    const attendanceWednesdayFeelingIconWeight =
      attendanceWednesdayFeelingIndex >= 0 ? feelings[attendanceWednesdayFeelingIndex].weight : 0;

    const attendanceThursdayFeelingIndex = feelings.findIndex(
      feeling => feeling.id === weekFeelings.thursday.attendance.feeling_id
    );

    const attendanceThursdayFeelingIconWeight =
      attendanceThursdayFeelingIndex >= 0 ? feelings[attendanceThursdayFeelingIndex].weight : 0;

    const attendanceFridayFeelingIndex = feelings.findIndex(
      feeling => feeling.id === weekFeelings.friday.attendance.feeling_id
    );

    const attendanceFridayFeelingIconWeight =
      attendanceFridayFeelingIndex >= 0 ? feelings[attendanceFridayFeelingIndex].weight : 0;

    const data = [
      {
        気分: attendanceMondayFeelingIconWeight,
      },
      {
        気分: attendanceTuesdayFeelingIconWeight,
      },
      {
        気分: attendanceWednesdayFeelingIconWeight,
      },
      {
        気分: attendanceThursdayFeelingIconWeight,
      },
      {
        気分: attendanceFridayFeelingIconWeight,
      },
    ];

    const CustomizedTicks = (props: any) => {
      const { x, y, payload } = props;

      return <JuniorFeelingsChartTableCellTickSvg x={x} y={y} tick={payload.value} />;
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

export default withStyles(styles)(JuniorFeelingsChartTableCell);
