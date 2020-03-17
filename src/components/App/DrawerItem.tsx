import React from 'react';
import {
  ListItem,
  ListItemIcon,
  Typography,
  ListItemText,
  makeStyles,
  createStyles,
} from '@material-ui/core';
import { SvgIconProps } from '@material-ui/core/SvgIcon';

type Props = {
  onClickDrawerItem: (
    route: string,
    dates?: Date[]
  ) => (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => void;
  isOpenDrawer: boolean;
  path: string;
  currentPath: string;
  iconName: string;
  clickedDates?: Date[];
  IconComponent?: (props: SvgIconProps) => JSX.Element;
  IconSvg?: string;
  IconClickedSvg?: string;
};

const DrawerItem: React.FC<Props> = props => {
  const classes = styles();
  const {
    isOpenDrawer,
    onClickDrawerItem,
    path,
    currentPath,
    iconName,
    clickedDates,
    IconComponent,
    IconSvg,
    IconClickedSvg,
  } = props;

  if (!isOpenDrawer) {
    return (
      <ListItem button onClick={onClickDrawerItem(path, clickedDates)}>
        <ListItemIcon className={classes.drawerListClosedItemMergin}>
          <div className={classes.position}>
            {IconComponent && (
              <IconComponent
                className={currentPath === path ? classes.clickColor : classes.iconColor}
              />
            )}
            {IconSvg && IconClickedSvg && (
              <img
                src={currentPath === path ? IconClickedSvg : IconSvg}
                className={classes.iconImg}
                alt={iconName}
              />
            )}
            <Typography className={currentPath === path ? classes.clickFont : classes.font}>
              {iconName}
            </Typography>
          </div>
        </ListItemIcon>
        <ListItemText primary={iconName} />
      </ListItem>
    );
  } else {
    return (
      <ListItem button onClick={onClickDrawerItem(iconName, clickedDates)} className={classes.hoge}>
        <ListItemIcon>
          <div>
            {IconComponent && (
              <IconComponent
                className={currentPath === path ? classes.clickColor : classes.iconColor}
              />
            )}
            {IconSvg && IconClickedSvg && (
              <img
                src={currentPath === path ? IconClickedSvg : IconSvg}
                className={classes.iconImg}
                alt={iconName}
              />
            )}
          </div>
        </ListItemIcon>
        <ListItemText primary={iconName} />
      </ListItem>
    );
  }
};

export default DrawerItem;

const styles = makeStyles(() =>
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
    drawerListClosedItemMergin: {
      marginTop: 30,
      marginBottom: 30,
    },
    hoge: {
      marginTop: 9,
      marginLeft: 3.5,
      marginBottom: 29,
    },
  })
);
