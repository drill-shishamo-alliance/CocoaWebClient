import React, { useState } from 'react';
import { IconPosition, IconContainer, RowData } from './IconDisplayStyles';
import { Typography } from '@material-ui/core';
import { useSelector } from 'react-redux';
import rootState from 'src/states/index';
import IconToolTip from '../IconToolTip/IconToolTip';

type Props = {
  moodId: number;
  causeIds: number[];
};

const IconDisplay: React.FC<Props> = props => {
  const { moodId, causeIds } = props;
  const moods = useSelector<rootState, rootState['MoodsState']>(state => state.MoodsState);
  const causes = useSelector<rootState, rootState['CausesState']>(state => state.CausesState);
  const [isHover, setIsHover] = useState(false);

  const iconName = moods[moodId].icon_name;
  const moodName = moods[moodId].name;
  const iconColor = moods[moodId].color;
  const causeNames = causeIds.map(causeId => causes[causeId].name);

  const onMouseEnter = () => {
    setIsHover(true);
  };

  const onMouseLeave = () => {
    setIsHover(false);
  };

  return (
    <RowData>
      <IconContainer onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave}>
        <IconPosition className='material-icons' style={{ color: iconColor }}>
          {iconName}
          {isHover && iconName !== 'clear' && <IconToolTip causeNames={causeNames} />}
        </IconPosition>
        <Typography variant='caption' style={{ color: iconColor }}>
          {moodName}
        </Typography>
      </IconContainer>
    </RowData>
  );
};

export default IconDisplay;
