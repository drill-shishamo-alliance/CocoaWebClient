import * as React from 'react';
import { withStyles } from '@material-ui/core/styles';
import styles from './EmployeeMoodsIconTableCellStyles';
import EmployeeMoodsIconTableCellProps from './EmployeeMoodsIconTableCellProps';
import classNames from 'classnames';
import Typography from '@material-ui/core/Typography';

class EmployeeMoodsIconTableCell extends React.Component<EmployeeMoodsIconTableCellProps> {
  render() {
    const { classes, attendanceMoodId, moods } = this.props;
    const attendanceMoodIndex = moods.findIndex(mood => mood.id === attendanceMoodId);
    console.log(attendanceMoodIndex);
    const attendanceMoodIconName =
      attendanceMoodIndex >= 0 ? moods[attendanceMoodIndex].icon_name : 'clear';
    const attendanceMoodName =
      attendanceMoodIndex >= 0 ? moods[attendanceMoodIndex].name : '未入力';
    const attendanceMoodIconColor =
      attendanceMoodIndex >= 0 ? moods[attendanceMoodIndex].color : '#ff0000';

    return (
      <div className={classNames(classes.row, classes.dataPosition)}>
        <div className={classes.iconContainer}>
          {attendanceMoodIconName && attendanceMoodIconColor && (
            <i
              className={classNames('material-icons', classes.iconSize)}
              style={{ color: attendanceMoodIconColor }}
            >
              {attendanceMoodIconName}
            </i>
          )}
          <Typography variant='caption' style={{ color: attendanceMoodIconColor }}>
            {attendanceMoodName}
          </Typography>
        </div>
      </div>
    );
  }
}

export default withStyles(styles)(EmployeeMoodsIconTableCell);
