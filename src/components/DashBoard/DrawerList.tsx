import React from 'react';
import { List } from '@material-ui/core';
import DrawerItem, { SelectComponentIcon, SelectSvgIcon } from './DrawerItem';
import HomeMaterialIcon from '@material-ui/icons/Home';
import { GetPastFiveDays } from '../HomeScreen/Table/utils/GetPastFiveDays';
import getWeekIndex from 'src/utilsLogic/Date/GetWeekNumber';
import getWeekOfMonth from 'src/utilsLogic/Date/GetWeekOfMonth';
import EmployeeMoodsSvgIcon from 'src/assets/DrawerItems/defalt/EmployeeMoodsIcon.svg';
import EmployeeMoodsClickedSvgIcon from 'src/assets/DrawerItems/clicked/EmployeeMoodsIcon.svg';
import RankingClickedSvgIcon from 'src/assets/DrawerItems/clicked/Ranking.svg';
import RankingSvgIcon from 'src/assets/DrawerItems/defalt/Ranking.svg';

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
  const HomeIcon: SelectComponentIcon = { ComponentIcon: HomeMaterialIcon };
  const EmployeeMoodsIcon: SelectSvgIcon = {
    SvgIcon: { NormalIcon: EmployeeMoodsSvgIcon, ClickedIcon: EmployeeMoodsClickedSvgIcon },
  };
  const RankingIcon: SelectSvgIcon = {
    SvgIcon: { NormalIcon: RankingSvgIcon, ClickedIcon: RankingClickedSvgIcon },
  };
  return (
    <List>
      <DrawerItem
        iconName='ホーム'
        path='/app'
        Icon={HomeIcon}
        clickedDates={pastFiveDays}
        onClickDrawerItem={onClickDrawerItem}
        isOpenDrawer={isOpenDrawer}
        currentPath={currentPath}
      />
      <DrawerItem
        iconName='部下の気分'
        path='/app/employeemoods'
        Icon={EmployeeMoodsIcon}
        clickedDates={initialEmployeeMoodsDisplaySpan}
        onClickDrawerItem={onClickDrawerItem}
        isOpenDrawer={isOpenDrawer}
        currentPath={currentPath}
      />
      <DrawerItem
        iconName='ランキング'
        path='/app/ranking'
        Icon={RankingIcon}
        clickedDates={initialEmployeeMoodsDisplaySpan}
        onClickDrawerItem={onClickDrawerItem}
        isOpenDrawer={isOpenDrawer}
        currentPath={currentPath}
      />
    </List>
  );
};

export default DrawerList;
