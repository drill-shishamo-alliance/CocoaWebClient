import * as React from 'react';
import JuniorFeelingsIconTableCellProps from './JuniorFeelingsIconTableCellProps';
import classNames from 'classnames';

function JuniorFeelingsIconTableCell(props: JuniorFeelingsIconTableCellProps) {
  const { classes, iconColor, iconName } = props;

  return (
    <div className={classes.row}>
      <i className={classNames('material-icons', iconColor, classes.iconSize)}>{iconName}</i>
      <i className={classNames('material-icons', iconColor, classes.iconSize)}>{iconName}</i>
    </div>
  );
}

export default JuniorFeelingsIconTableCell;
