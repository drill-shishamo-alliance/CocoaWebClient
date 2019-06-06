import * as React from 'react';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import HomeIcon from '@material-ui/icons/Home';
import JuniorFeelingsIcon from 'src/assets/DrawerItems/JuniorFeelingsIcon.svg';
import MyFeelingIcon from 'src/assets/DrawerItems/MyFeelingIcon.svg';
import DepartmentalAnalysisIcon from 'src/assets/DrawerItems/DepartmentalAnalysisIcon.svg';
import MapIcon from '@material-ui/icons/Map';
import List from '@material-ui/core/List';
import { withStyles, createStyles, Theme, WithStyles } from '@material-ui/core';

const styles = (theme: Theme) =>
  createStyles({
    iconImg: {
      height: 24,
      width: 24,
    },
  });

type Props = {
  handleClick: (route: string) => (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => void;
} & WithStyles<typeof styles>;

class RouteableDrawerList extends React.Component<Props> {
  public render() {
    const { handleClick, classes } = this.props;
    return (
      <List>
        <ListItem button onClick={handleClick('/')}>
          <ListItemIcon>
            <HomeIcon />
          </ListItemIcon>
          <ListItemText primary='ホーム' />
        </ListItem>

        <ListItem button onClick={handleClick('/juniorfeelings')}>
          <ListItemIcon>
            <img src={JuniorFeelingsIcon} className={classes.iconImg} />
          </ListItemIcon>
          <ListItemText primary='部下の気分' />
        </ListItem>

        <ListItem button onClick={handleClick('/myfeelings')}>
          <ListItemIcon>
            <img src={MyFeelingIcon} className={classes.iconImg} />
          </ListItemIcon>
          <ListItemText primary='自分の気分' />
        </ListItem>

        <ListItem button onClick={handleClick('/departmentalanalysis')}>
          <ListItemIcon>
            <img src={DepartmentalAnalysisIcon} className={classes.iconImg} />
          </ListItemIcon>
          <ListItemText primary='部署の分析' />
        </ListItem>

        <ListItem button onClick={handleClick('/feelingsmap')}>
          <ListItemIcon>
            <MapIcon />
          </ListItemIcon>
          <ListItemText primary='気分マップ' />
        </ListItem>
      </List>
    );
  }
}
export default withStyles(styles)(RouteableDrawerList);
