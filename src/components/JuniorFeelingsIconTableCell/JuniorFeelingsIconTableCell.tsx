import * as React from 'react';
import { withStyles } from '@material-ui/core/styles';
import styles from './JuniorFeelingsIconTableCellStyles';
import JuniorFeelingsIconTableCellProps from './JuniorFeelingsIconTableCellProps';
import classNames from 'classnames';

function JuniorFeelingsIconTableCell(props: JuniorFeelingsIconTableCellProps) {
  const { classes, attendanceFeelingId, leavingFeelingId, feelings } = props;

  const getIconStateProps = (weight: number) => {
    switch (weight) {
      case 1:
        return {
          iconName: feelings[0].icon_name,
          iconColor: feelings[0].color,
        };
      case 2:
        return {
          iconName: feelings[1].icon_name,
          iconColor: feelings[1].color,
        };
      case 3:
        return {
          iconName: feelings[2].icon_name,
          iconColor: feelings[2].color,
        };
      case 4:
        return {
          iconName: feelings[3].icon_name,
          iconColor: feelings[3].color,
        };
      case 5:
        return {
          iconName: feelings[4].icon_name,
          iconColor: feelings[4].color,
        };
    }
  };

  const attendanceIconProps = getIconStateProps(Number(attendanceFeelingId));
  const leavingIconProps = getIconStateProps(Number(leavingFeelingId));

  return (
    <div className={classes.row}>
      <i className={classNames('material-icons', attendanceIconProps.iconColor, classes.iconSize)}>
        {attendanceIconProps.iconName}
      </i>
      <i className={classNames('material-icons', leavingIconProps.iconColor, classes.iconSize)}>
        {leavingIconProps.iconName}
      </i>
    </div>
  );
}

export default withStyles(styles)(JuniorFeelingsIconTableCell);
