import React, { useState } from 'react';
import { IconPosition, IconContainer, RowData } from './IconDisplayStyles';
import { Typography } from '@material-ui/core';
import { useSelector } from 'react-redux';
import rootState from 'src/states/index';
import IconToolTip from '../IconToolTip/IconToolTip';

type Props = {
  moodId: string;
  causeIds: string[];
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
      {console.log(causeNames.length)}
      <IconContainer onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave}>
        {iconName && iconColor && (
          <IconPosition className='material-icons' style={{ color: iconColor }}>
            {iconName}
            {/* {iconName !== 'clear' || causeNames.length > 0
              ? isHover && <IconToolTip causeNames={causeNames} />
              : ''} */}
            {isHover && causeNames.length !== 0 && <IconToolTip causeNames={causeNames} />}
          </IconPosition>
        )}
        <Typography variant='caption' style={{ color: iconColor }}>
          {moodName}
        </Typography>
      </IconContainer>
    </RowData>
  );
};

export default IconDisplay;
