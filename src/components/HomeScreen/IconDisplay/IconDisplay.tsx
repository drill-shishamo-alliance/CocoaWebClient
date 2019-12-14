import React from 'react';
import classNames from 'classnames';
import styles from './IconDisplayStyles';
import { Typography } from '@material-ui/core';
import { useSelector } from 'react-redux';
import rootState from 'src/states/index';

type Props = {
  moodId: string;
};

const IconDisplay: React.FC<Props> = props => {
  const classes = styles();
  const { moodId } = props;
  const moods = useSelector<rootState, rootState['MoodsState']>(state => state.MoodsState);

  const iconName = moods[moodId].icon_name;
  const moodName = moods[moodId].name;
  const iconColor = moods[moodId].color;

  return (
    <div className={classNames(classes.row, classes.dataPosition)}>
      <div className={classes.iconContainer}>
        {iconName && iconColor && (
          <i
            className={classNames('material-icons', classes.iconSize)}
            style={{ color: iconColor }}
          >
            {iconName}
          </i>
        )}
        <Typography variant='caption' style={{ color: iconColor }}>
          {moodName}
        </Typography>
      </div>
    </div>
  );
};

export default IconDisplay;
