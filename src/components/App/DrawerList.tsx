import React from 'react';
import { List } from '@material-ui/core';
import DrawerItem from './DrawerItem';
import HomeIcon from '@material-ui/icons/Home';
import { GetPastFiveDays } from '../HomeScreen/Table/utils/GetPastFiveDays';
import getWeekIndex from 'src/utilsLogic/Date/GetWeekNumber';
import getWeekOfMonth from 'src/utilsLogic/Date/GetWeekOfMonth';
import EmployeeMoodsIcon from 'src/assets/DrawerItems/defalt/EmployeeMoodsIcon.svg';
import EmployeeMoodsClickedIcon from 'src/assets/DrawerItems/clicked/EmployeeMoodsIcon.svg';
import RankingClickedIcon from 'src/assets/DrawerItems/clicked/Ranking.svg';
import RankingIcon from 'src/assets/DrawerItems/defalt/Ranking.svg';

type Props = {
  onClickDrawerItem: (
    route: string,
    dates?: Date[]
  ) => (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => void;
  isOpenDrawer: boolean;
  currentPath: string;
};

const DrawerList: React.FC<Props> = props => {
  const { onClickDrawerItem, isOpenDrawer, currentPath } = props;
  const pastFiveDays = GetPastFiveDays();
  const date = new Date();
  const weekIndex = getWeekIndex(date);
  const initialEmployeeMoodsDisplaySpan = getWeekOfMonth(date, weekIndex);
  return (
    <List>
      <DrawerItem
        iconName='ホーム'
        path='/'
        IconComponent={HomeIcon}
        clickedDates={pastFiveDays}
        onClickDrawerItem={onClickDrawerItem}
        isOpenDrawer={isOpenDrawer}
        currentPath={currentPath}
      />
      <DrawerItem
        iconName='部下の気分'
        path='/employeemoods'
        IconSvg={EmployeeMoodsIcon}
        IconClickedSvg={EmployeeMoodsClickedIcon}
        clickedDates={initialEmployeeMoodsDisplaySpan}
        onClickDrawerItem={onClickDrawerItem}
        isOpenDrawer={isOpenDrawer}
        currentPath={currentPath}
      />
      <DrawerItem
        iconName='ランキング'
        path='/ranking'
        IconSvg={RankingIcon}
        IconClickedSvg={RankingClickedIcon}
        clickedDates={initialEmployeeMoodsDisplaySpan}
        onClickDrawerItem={onClickDrawerItem}
        isOpenDrawer={isOpenDrawer}
        currentPath={currentPath}
      />
    </List>
  );
};

export default DrawerList;
