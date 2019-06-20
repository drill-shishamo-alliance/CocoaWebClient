import * as React from 'react';
import { withStyles } from '@material-ui/core/styles';
import styles from './JuniorFeelingsIconTableCellStyles';
import JuniorFeelingsIconTableCellProps from './JuniorFeelingsIconTableCellProps';
import classNames from 'classnames';

class JuniorFeelingsIconTableCell extends React.Component<JuniorFeelingsIconTableCellProps> {
  render() {
    const { classes, attendanceFeelingId, leavingFeelingId, feelings } = this.props;
    const attendanceFeelingIndex = feelings.findIndex(
      feeling => feeling.id === attendanceFeelingId
    );
    console.log(attendanceFeelingIndex);
    const attendanceFeelingIconName =
      attendanceFeelingIndex >= 0 ? feelings[attendanceFeelingIndex].icon_name : undefined;
    const attendanceFeelingIconColor =
      attendanceFeelingIndex >= 0 ? feelings[attendanceFeelingIndex].color : undefined;

    const leavingFeelingIndex = feelings.findIndex(feeling => feeling.id === leavingFeelingId);
    const leavingFeelingIconName =
      leavingFeelingIndex >= 0 ? feelings[leavingFeelingIndex].icon_name : undefined;
    const leavingFeelingIconColor =
      leavingFeelingIndex >= 0 ? feelings[leavingFeelingIndex].color : undefined;
    return (
      <div className={classes.row}>
        {attendanceFeelingIconName && attendanceFeelingIconColor && (
          <i className={classNames('material-icons', attendanceFeelingIconColor, classes.iconSize)}>
            {attendanceFeelingIconName}
          </i>
        )}
        {leavingFeelingIconName && leavingFeelingIconColor && (
          <i className={classNames('material-icons', leavingFeelingIconColor, classes.iconSize)}>
            {leavingFeelingIconName}
          </i>
        )}
      </div>
    );
  }
}

export default withStyles(styles)(JuniorFeelingsIconTableCell);
