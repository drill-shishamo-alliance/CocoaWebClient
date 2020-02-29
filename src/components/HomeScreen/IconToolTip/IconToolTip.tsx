import React from 'react';
import { StyledIconToolTip, Material, Svg, Horizontal, Border, Div } from './IconToolTipStyles';
import { iconMap } from 'src/utilsLogic/Icon/GetCauseIcon';

type Props = {
  causeNames: string[];
};

const IconToolTip: React.FC<Props> = props => {
  const { causeNames } = props;

  const materialIcon = (iconName: string) => (
    <Material className={'material-icons'}>{iconName}</Material>
  );

  const svgIcon = (src: string) => <Svg src={src} />;

  const icon = (causeName: string) =>
    iconMap[causeName].icon_path
      ? materialIcon(iconMap[causeName].icon_path)
      : iconMap[causeName].src && svgIcon(iconMap[causeName].src);

  return (
    <StyledIconToolTip>
      <Border>原因</Border>
      {causeNames.length !== 0 ? (
        causeNames.map(causeName => {
          return (
            <Div>
              {icon(causeName)}
              <Horizontal key={causeName}>{causeName}</Horizontal>
            </Div>
          );
        })
      ) : (
        <Div>未入力</Div>
      )}
    </StyledIconToolTip>
  );
};

export default IconToolTip;
