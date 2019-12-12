import React, { useState, useEffect } from 'react';
import { theme } from 'src/utilsUI/theme';
import AppStyles from './AppStyles';
import { MuiThemeProvider } from '@material-ui/core/styles';
import { CssBaseline, AppBar, Toolbar, IconButton, Typography, Drawer } from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import classNames from 'classnames';
import DrawerList from './DrawerList';
import Home from '../HomeScreen/HomeScreen';
import EmployeeMoodsScreen from '../EmployeeMoodsScreen/EmployeeMoodsScreen';
import MyMoods from '../MyMoodsScreen/MyMoods';
import DepartmentalAnalysis from '../DepartmentalAnalysisScreen/DepartmentalAnalysis';
import MoodsMap from '../MoodsMapScreen/MoodsMap';
import { Switch, Route, useHistory } from 'react-router-dom';
import { getMoods } from 'src/actions/Moods/ActionCreator';
import { getEmployees } from 'src/actions/Employees/ActionCreator';
import { getListMoodOfEmployee } from 'src/actions/ListMoodOfEmployee/ActionCreator';
import { useDispatch, useSelector } from 'react-redux';
import RootState from 'src/states';
import convertDateToUnix from 'src/utilsLogic/Date/ConvertDateToUnix';
import { updateDisplaySpan } from 'src/actions/DisplayDate/DisplayDateActionCreator';

const DashBoard: React.FC = () => {
  const displaySpan = useSelector<RootState, RootState['displayDateState']['displaySpan']>(
    state => state.displayDateState.displaySpan
  );
  const dispatch = useDispatch();

  useEffect(() => {
    const initialRequestBeginDate = convertDateToUnix(displaySpan[0]);
    const initialRequestEndDate = convertDateToUnix(displaySpan[displaySpan.length - 1]);
    dispatch(getMoods.request({}));
    dispatch(getEmployees.request({}));
    dispatch(
      getListMoodOfEmployee.request({
        beginDate: initialRequestBeginDate,
        endDate: initialRequestEndDate,
      })
    );
  }, []);

  const classes = AppStyles();
  const history = useHistory();

  const [isOpenDrawer, setIsOpenDrower] = useState(false);

  const handleDrawerOpen = () => {
    setIsOpenDrower(!isOpenDrawer);
  };

  const routeMainContent = (route: string, dates?: Date[]) => () => {
    history.push(route);
    if (dates !== undefined) {
      dispatch(updateDisplaySpan({ displaySpan: dates }));
      const beginDate = convertDateToUnix(new Date(dates[0]));
      const endDate = convertDateToUnix(new Date(dates[dates.length - 1]));
      dispatch(getListMoodOfEmployee.request({ beginDate, endDate }));
    }
  };

  return (
    <MuiThemeProvider theme={theme}>
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
    </MuiThemeProvider>
  );
};

export default DashBoard;
