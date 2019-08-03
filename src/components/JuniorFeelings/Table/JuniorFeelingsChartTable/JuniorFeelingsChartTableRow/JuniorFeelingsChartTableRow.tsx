import * as React from 'react';
import JuniorFeelingsChartTableRowProps from './JuniorFeelingsChartTableRowProps';
import styles from './JuniorFeelingsChartTableRowStyles';
import { withStyles } from '@material-ui/styles';
import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';
import JuniorFeelingsChartTableCell from 'src/containers/JuniorFeelingsChartTableCell/JuniorFeelingsChartTableCell';
import Button from '@material-ui/core/Button';

class JuniorFeelingsChartTableRow extends React.Component<JuniorFeelingsChartTableRowProps> {
  render() {
    const { classes, juniorData, handleClick } = this.props;

    return (
      <TableRow key={juniorData.name}>
        <TableCell align='center' className={classes.cellContainer}>
          <Button
            size='medium'
            className={classes.juniorPosition}
            onClick={handleClick(juniorData)}
          >
            {juniorData.name}
          </Button>
          <JuniorFeelingsChartTableCell weekFeelings={juniorData.week_feelings} />
        </TableCell>
      </TableRow>
    );
  }
}

export default withStyles(styles)(JuniorFeelingsChartTableRow);
