import React from 'react';
import { Material, Svg } from './GetIconStyles';
import { iconMap } from '../../utilsLogic/Icon/GetCauseIcon';

type Props = {
  causeName: string;
};

const GetIcon: React.FC<Props> = props => {
  const { causeName } = props;

  const materialIcon = (iconName: string) => (
    <Material className={'material-icons'}>{iconName}</Material>
  );

  const svgIcon = (src: string) => <Svg src={src} />;

  const icon = (causeName: string) =>
    iconMap[causeName].icon_path
      ? materialIcon(iconMap[causeName].icon_path)
      : iconMap[causeName].src && svgIcon(iconMap[causeName].src);

  return <div>{icon(causeName)}</div>;
};

export default GetIcon;
