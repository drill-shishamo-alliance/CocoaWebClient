import * as React from 'react';
import JuniorFeelingsChartTableRowProps from './JuniorFeelingsChartTableRowProps';
import styles from './JuniorFeelingsChartTableRowStyles';
import { withStyles } from '@material-ui/styles';
import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';
import Typography from '@material-ui/core/Typography';
import JuniorFeelingsChartTableCell from 'src/containers/JuniorFeelingsChartTableCell/JuniorFeelingsChartTableCell';

class JuniorFeelingsChartTableRow extends React.Component<JuniorFeelingsChartTableRowProps> {
  render() {
    const { classes, juniorData } = this.props;

    return (
      <TableRow key={juniorData.name}>
        <TableCell align='center' className={classes.cellContainer}>
          <Typography variant='subtitle2' className={classes.juniorPosition}>
            {juniorData.name}
          </Typography>
          <JuniorFeelingsChartTableCell weekFeelings={juniorData.week_feelings} />
        </TableCell>
      </TableRow>
    );
  }
}

export default withStyles(styles)(JuniorFeelingsChartTableRow);
