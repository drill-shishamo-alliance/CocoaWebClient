import * as React from 'react';
import { withStyles } from '@material-ui/core/styles';
import styles from './JuniorFeelingsIconTableCellStyles';
import JuniorFeelingsIconTableCellProps from './JuniorFeelingsIconTableCellProps';
import classNames from 'classnames';
import Typography from '@material-ui/core/Typography';

class JuniorFeelingsIconTableCell extends React.Component<JuniorFeelingsIconTableCellProps> {
  render() {
    const { classes, attendanceFeelingId, leavingFeelingId, feelings } = this.props;
    const attendanceFeelingIndex = feelings.findIndex(
      feeling => feeling.id === attendanceFeelingId
    );
    console.log(attendanceFeelingIndex);
    const attendanceFeelingIconName =
      attendanceFeelingIndex >= 0 ? feelings[attendanceFeelingIndex].icon_name : 'clear';
    const attendanceFeelingName =
      attendanceFeelingIndex >= 0 ? feelings[attendanceFeelingIndex].name : '未入力';
    const attendanceFeelingIconColor =
      attendanceFeelingIndex >= 0 ? feelings[attendanceFeelingIndex].color : '#ff0000';

    const leavingFeelingIndex = feelings.findIndex(feeling => feeling.id === leavingFeelingId);
    const leavingFeelingIconName =
      leavingFeelingIndex >= 0 ? feelings[leavingFeelingIndex].icon_name : 'clear';
    const leavingFeelingName =
      leavingFeelingIndex >= 0 ? feelings[leavingFeelingIndex].name : '未入力';
    const leavingFeelingIconColor =
      leavingFeelingIndex >= 0 ? feelings[leavingFeelingIndex].color : '#ff0000';
    return (
      <div className={classes.row}>
        <div className={classes.iconContainer}>
          {attendanceFeelingIconName && attendanceFeelingIconColor && (
            <i
              className={classNames('material-icons', classes.iconSize)}
              style={{ color: attendanceFeelingIconColor }}
            >
              {attendanceFeelingIconName}
            </i>
          )}
          <Typography variant='caption'>{attendanceFeelingName}</Typography>
        </div>
        <div className={classes.iconContainer}>
          {leavingFeelingIconName && leavingFeelingIconColor && (
            <i
              className={classNames('material-icons', leavingFeelingIconColor, classes.iconSize)}
              style={{ color: leavingFeelingIconColor }}
            >
              {leavingFeelingIconName}
            </i>
          )}
          <Typography variant='caption'>{leavingFeelingName}</Typography>
        </div>
      </div>
    );
  }
}

export default withStyles(styles)(JuniorFeelingsIconTableCell);
