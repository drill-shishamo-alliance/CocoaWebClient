import React, { useState, useEffect } from 'react';
import { theme } from 'src/utilsUI/theme';
import AppStyles from './AppStyles';
import { MuiThemeProvider } from '@material-ui/core/styles';
import { ThemeProvider as StyledThemeProvider } from 'styled-components';
import { CssBaseline, AppBar, Toolbar, IconButton, Typography, Drawer } from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import classNames from 'classnames';
import DrawerList from './DrawerList';
import Home from '../HomeScreen/Home';
import EmployeeMoodsScreen from '../EmployeeMoodsScreen/EmployeeMoodsScreen';
import MyMoods from '../MyMoodsScreen/MyMoods';
import DepartmentalAnalysis from '../DepartmentalAnalysisScreen/DepartmentalAnalysis';
import MoodsMap from '../MoodsMapScreen/MoodsMap';
import { Switch, Route, useHistory } from 'react-router-dom';
import { getMoods } from 'src/actions/Moods/ActionCreator';
import { getEmployees } from 'src/actions/Employees/ActionCreator';
import { getListMoodOfEmployee } from 'src/actions/ListMoodOfEmployee/ActionCreator';
import { useDispatch } from 'react-redux';

const DashBoard: React.FC = () => {
  const beginDate = new Date();
  const endDate = new Date();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getMoods.request({}));
    dispatch(getEmployees.request({}));
    dispatch(getListMoodOfEmployee.request({ beginDate, endDate }));
  });

  const classes = AppStyles();
  const history = useHistory();

  const [isOpenDrawer, setIsOpenDrower] = useState(false);

  const handleDrawerOpen = () => {
    setIsOpenDrower(!isOpenDrawer);
  };

  const routeMainContent = (route: string) => () => history.push(route);

  return (
    <MuiThemeProvider theme={theme}>
      <StyledThemeProvider theme={theme}>
        <div className={classes.root}>
          <CssBaseline />
          <AppBar
            position='fixed'
            className={classNames(classes.appBar, isOpenDrawer && classes.appBarShift)}
          >
            <Toolbar className={classes.toolbar}>
              <IconButton
                className={classes.menuButton}
                color='inherit'
                aria-label='Open drawer'
                onClick={handleDrawerOpen}
              >
                <MenuIcon />
              </IconButton>
              <Typography className={classes.title} variant='h6' color='inherit' noWrap>
                Cocoa Web Client
              </Typography>
            </Toolbar>
          </AppBar>
          <Drawer
            variant='permanent'
            classes={{
              paper: classNames(classes.drawerPaper, !isOpenDrawer && classes.drawerPaperClose),
            }}
            open={isOpenDrawer}
          >
            <DrawerList handleClick={routeMainContent} />
          </Drawer>
          <main className={classNames(classes.content, isOpenDrawer && classes.contentShift)}>
            <div className={classes.appBarSpacer} />
            <Switch>
              <Route exact path='/' component={Home} />
              <Route path='/employeemoods' component={EmployeeMoodsScreen} />
              <Route path='/mymoods' component={MyMoods} />
              <Route path='/departmentalanalysis' component={DepartmentalAnalysis} />
              <Route path='/moodsmap' component={MoodsMap} />
            </Switch>
          </main>
        </div>
      </StyledThemeProvider>
    </MuiThemeProvider>
  );
};

export default DashBoard;
