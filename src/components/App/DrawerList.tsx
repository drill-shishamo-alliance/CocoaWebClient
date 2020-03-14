import * as React from 'react';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import HomeIcon from '@material-ui/icons/Home';
import EmployeeMoodsIcon from 'src/assets/DrawerItems/defalt/EmployeeMoodsIcon.svg';
import EmployeeMoodsClickedIcon from 'src/assets/DrawerItems/clicked/EmployeeMoodsIcon.svg';
import RankingClickedIcon from 'src/assets/DrawerItems/clicked/Ranking.svg';
import RankingIcon from 'src/assets/DrawerItems/defalt/Ranking.svg';
import List from '@material-ui/core/List';
import { Theme, makeStyles, createStyles, Typography } from '@material-ui/core';
import { GetPastFiveDays } from '../HomeScreen/Table/utils/GetPastFiveDays';
import getWeekIndex from 'src/utilsLogic/Date/GetWeekNumber';
import getWeekOfMonth from 'src/utilsLogic/Date/GetWeekOfMonth';
import classNames from 'classnames';

const styles = makeStyles((theme: Theme) =>
  createStyles({
    iconImg: {
      height: 24,
      width: 24,
    },
    iconColor: {
      color: '#4b4b4b',
    },
    clickColor: {
      color: '#2196f3',
    },
    position: {
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      position: 'absolute',
      top: '50%',
      left: '50%',
      transform: 'translate(-50%, -50%)',
      padding: '15px 30px',
      textAlign: 'center',
      width: '100%',
    },
    font: {
      fontSize: 1,
    },
    clickFont: {
      fontSize: 1,
      color: '#2196f3',
    },
    margin: {
      marginTop: -7,
    },
  })
);

type Props = {
  handleClick: (
    route: string,
    dates?: Date[]
  ) => (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => void;
  isOpenDrawer: boolean;
  routePath: string;
};

const DrawerList: React.FC<Props> = props => {
  const classes = styles();
  const { handleClick, isOpenDrawer, routePath } = props;
  const pastFiveDays = GetPastFiveDays();
  const date = new Date();
  const weekIndex = getWeekIndex(date);
  const initialEmployeeMoodsDisplaySpan = getWeekOfMonth(date, weekIndex);

  return (
    <List>
      <ListItem button onClick={handleClick('/', pastFiveDays)}>
        <ListItemIcon>
          {isOpenDrawer === false ? (
            <div className={classes.position}>
              <HomeIcon className={routePath === '/' ? classes.clickColor : classes.iconColor} />
              <Typography className={routePath === '/' ? classes.clickFont : classes.font}>
                ホーム
              </Typography>
            </div>
          ) : (
            <HomeIcon className={routePath === '/' ? classes.clickColor : classes.iconColor} />
          )}
        </ListItemIcon>
        <ListItemText primary='ホーム' />
      </ListItem>

      <ListItem button onClick={handleClick('/employeemoods', initialEmployeeMoodsDisplaySpan)}>
        <ListItemIcon>
          {isOpenDrawer === false ? (
            <div className={classes.position}>
              <img
                src={routePath === '/employeemoods' ? EmployeeMoodsClickedIcon : EmployeeMoodsIcon}
                className={classes.iconImg}
                alt='employeemoods'
              />
              <Typography
                className={routePath === '/employeemoods' ? classes.clickFont : classes.font}
              >
                部下の気分
              </Typography>
            </div>
          ) : (
            <img
              src={routePath === '/employeemoods' ? EmployeeMoodsClickedIcon : EmployeeMoodsIcon}
              className={classes.iconImg}
              alt='employeemoods'
            />
          )}
        </ListItemIcon>
        <ListItemText primary='部下の気分' />
      </ListItem>

      <ListItem button onClick={handleClick('/ranking', initialEmployeeMoodsDisplaySpan)}>
        <ListItemIcon>
          {isOpenDrawer === false ? (
            <div className={classes.position}>
              <img
                src={routePath === '/ranking' ? RankingClickedIcon : RankingIcon}
                className={classes.iconImg}
                alt='ranking'
              />
              <Typography className={routePath === '/ranking' ? classes.clickFont : classes.font}>
                部署
              </Typography>
              <Typography
                className={classNames(
                  routePath === '/ranking' ? classes.clickFont : classes.font,
                  classes.margin
                )}
              >
                ランキング
              </Typography>
            </div>
          ) : (
            <img
              src={routePath === '/ranking' ? RankingClickedIcon : RankingIcon}
              className={classes.iconImg}
              alt='ranking'
            />
          )}
        </ListItemIcon>
        <ListItemText primary='部署ランキング' />
      </ListItem>
    </List>
  );
};

export default DrawerList;
