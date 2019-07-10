import React, { PureComponent } from 'react';
import JuniorFeelingsChartTableRowProps from './JuniorFeelingsChartTableRowProps';
import styles from './JuniorFeelingsChartTableRowStyles';
import { withStyles } from '@material-ui/styles';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';

class JuniorFeelingsChartTableRow extends React.Component<JuniorFeelingsChartTableRowProps> {
  render() {
    return <div></div>;
  }
}

export default withStyles(styles)(JuniorFeelingsChartTableRow);
