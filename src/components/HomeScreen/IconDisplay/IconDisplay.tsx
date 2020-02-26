import React, { useState } from 'react';
import classNames from 'classnames';
import styles from './IconDisplayStyles';
import { Typography } from '@material-ui/core';
import { useSelector } from 'react-redux';
import rootState from 'src/states/index';
import IconToolTip from '../IconToolTip/IconToolTip';

type Props = {
  moodId: string;
  causeIds: string[];
};

const IconDisplay: React.FC<Props> = props => {
  const classes = styles();
  const { moodId, causeIds } = props;
  const moods = useSelector<rootState, rootState['MoodsState']>(state => state.MoodsState);
  const causes = useSelector<rootState, rootState['CausesState']>(state => state.CausesState);
  const [isHover, setIsHover] = useState(false);

  const iconName = moods[moodId].icon_name;
  const moodName = moods[moodId].name;
  const iconColor = moods[moodId].color;
  const causeNames = causeIds.map(causeId => causes[causeId].name);

  const onMouseEnter = () => {
    console.log(iconName);
    console.log(causeNames);
    setIsHover(true);
  };

  const onMouseLeave = () => {
    setIsHover(false);
  };

  return (
    <div className={classNames(classes.row, classes.dataPosition)}>
      <div
        className={classes.iconContainer}
        onMouseEnter={onMouseEnter}
        onMouseLeave={onMouseLeave}
      >
        {iconName && iconColor && (
          <i className='material-icons' style={{ color: iconColor, fontSize: 32 }}>
            {iconName}
          </i>
        )}
        <Typography variant='caption' style={{ color: iconColor }}>
          {moodName}
        </Typography>
        {isHover && <IconToolTip causeNames={causeNames} />}
      </div>
    </div>
  );
};

export default IconDisplay;
