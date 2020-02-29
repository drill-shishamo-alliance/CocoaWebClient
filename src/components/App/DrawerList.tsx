import * as React from 'react';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import HomeIcon from '@material-ui/icons/Home';
import EmployeeMoodsIcon from 'src/assets/DrawerItems/EmployeeMoodsIcon.svg';
// import MyMoodIcon from 'src/assets/DrawerItems/MyMoodIcon.svg';
import RankingIcon from 'src/assets/DrawerItems/Ranking.svg';
// import MapIcon from '@material-ui/icons/Map';
import List from '@material-ui/core/List';
import { Theme, makeStyles, createStyles } from '@material-ui/core';
import { GetPastFiveDays } from '../HomeScreen/Table/utils/GetPastFiveDays';
import getWeekIndex from 'src/utilsLogic/Date/GetWeekNumber';
import getWeekOfMonth from 'src/utilsLogic/Date/GetWeekOfMonth';

const styles = makeStyles((theme: Theme) =>
  createStyles({
    iconImg: {
      height: 24,
      width: 24,
    },
    iconColor: {
      color: '#4b4b4b',
    },
  })
);

type Props = {
  handleClick: (
    route: string,
    dates?: Date[]
  ) => (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => void;
};

const DrawerList: React.FC<Props> = props => {
  const classes = styles();
  const { handleClick } = props;
  const pastFiveDays = GetPastFiveDays();
  const date = new Date();
  const weekIndex = getWeekIndex(date);
  const initialEmployeeMoodsDisplaySpan = getWeekOfMonth(date, weekIndex);

  return (
    <List>
      <ListItem button onClick={handleClick('/', pastFiveDays)}>
        <ListItemIcon>
          <HomeIcon className={classes.iconColor} />
        </ListItemIcon>
        <ListItemText primary='ホーム' />
      </ListItem>

      <ListItem button onClick={handleClick('/employeemoods', initialEmployeeMoodsDisplaySpan)}>
        <ListItemIcon>
          <img src={EmployeeMoodsIcon} className={classes.iconImg} alt='employeemoods' />
        </ListItemIcon>
        <ListItemText primary='部下の気分' />
      </ListItem>
      {/* 
      <ListItem button onClick={handleClick('/mymoods')}>
        <ListItemIcon>
          <img src={MyMoodIcon} className={classes.iconImg} alt='mymoods' />
        </ListItemIcon>
        <ListItemText primary='自分の気分' />
      </ListItem> */}

      <ListItem button onClick={handleClick('/ranking', initialEmployeeMoodsDisplaySpan)}>
        <ListItemIcon>
          <img src={RankingIcon} className={classes.iconImg} alt='ranking' />
        </ListItemIcon>
        <ListItemText primary='部署ランキング' />
      </ListItem>

      {/* <ListItem button onClick={handleClick('/moodsmap')}>
        <ListItemIcon>
          <MapIcon />
        </ListItemIcon>
        <ListItemText primary='気分マップ' />
      </ListItem> */}
    </List>
  );
};

export default DrawerList;
