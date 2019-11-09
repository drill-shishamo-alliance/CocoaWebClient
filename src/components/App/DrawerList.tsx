import * as React from 'react';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import HomeIcon from '@material-ui/icons/Home';
import EmployeeMoodsIcon from 'src/assets/DrawerItems/EmployeeMoodsIcon.svg';
import MyMoodIcon from 'src/assets/DrawerItems/MyMoodIcon.svg';
import DepartmentalAnalysisIcon from 'src/assets/DrawerItems/DepartmentalAnalysisIcon.svg';
import MapIcon from '@material-ui/icons/Map';
import List from '@material-ui/core/List';
import { Theme, makeStyles, createStyles } from '@material-ui/core';

const styles = makeStyles((theme: Theme) =>
  createStyles({
    iconImg: {
      height: 24,
      width: 24,
    },
  })
);

type Props = {
  handleClick: (route: string) => (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => void;
};

const DrawerList: React.FC<Props> = props => {
  const classes = styles();
  const { handleClick } = props;
  return (
    <List>
      <ListItem button onClick={handleClick('/')}>
        <ListItemIcon>
          <HomeIcon />
        </ListItemIcon>
        <ListItemText primary='ホーム' />
      </ListItem>

      <ListItem button onClick={handleClick('/employeemoods')}>
        <ListItemIcon>
          <img src={EmployeeMoodsIcon} className={classes.iconImg} alt='employeemoods' />
        </ListItemIcon>
        <ListItemText primary='部下の気分' />
      </ListItem>

      <ListItem button onClick={handleClick('/mymoods')}>
        <ListItemIcon>
          <img src={MyMoodIcon} className={classes.iconImg} alt='mymoods' />
        </ListItemIcon>
        <ListItemText primary='自分の気分' />
      </ListItem>

      <ListItem button onClick={handleClick('/departmentalanalysis')}>
        <ListItemIcon>
          <img
            src={DepartmentalAnalysisIcon}
            className={classes.iconImg}
            alt='departmentalanalysis'
          />
        </ListItemIcon>
        <ListItemText primary='部署の分析' />
      </ListItem>

      <ListItem button onClick={handleClick('/moodsmap')}>
        <ListItemIcon>
          <MapIcon />
        </ListItemIcon>
        <ListItemText primary='気分マップ' />
      </ListItem>
    </List>
  );
};

export default DrawerList;
