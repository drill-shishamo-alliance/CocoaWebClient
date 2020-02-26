import React from 'react';
import { IconPosition, IconContainer, RowData } from './IconDisplayStyles';
import { Typography } from '@material-ui/core';
import { useSelector } from 'react-redux';
import rootState from 'src/states/index';

type Props = {
  moodId: string;
};

const IconDisplay: React.FC<Props> = props => {
  const { moodId } = props;
  const moods = useSelector<rootState, rootState['MoodsState']>(state => state.MoodsState);

  const iconName = moods[moodId].icon_name;
  const moodName = moods[moodId].name;
  const iconColor = moods[moodId].color;

  return (
    <RowData>
      <IconContainer>
        {iconName && iconColor && (
          <IconPosition className='material-icons' style={{ color: iconColor }}>
            {iconName}
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
