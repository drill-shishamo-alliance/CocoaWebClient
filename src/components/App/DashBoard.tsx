import React, { useState, useEffect } from 'react';
import { theme } from 'src/utilsUI/theme';
import AppStyles from './AppStyles';
import { MuiThemeProvider } from '@material-ui/core/styles';
import { ThemeProvider as StyledThemeProvider } from 'styled-components';
import { CssBaseline, AppBar, Toolbar, IconButton, Typography, Drawer } from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import classNames from 'classnames';
import DrawerList from './DrawerList';
import Home from '../HomeScreen/HomeScreen';
import EmployeeMoodsScreen from '../EmployeeMoodsScreen/EmployeeMoodsScreen';
// import MyMoods from '../MyMoodsScreen/MyMoods';
import Ranking from '../RankingScreen/RankingScreen';
// import MoodsMap from '../MoodsMapScreen/MoodsMap';
import { Switch, Route, useHistory } from 'react-router-dom';
import { getMoods } from 'src/actions/Moods/ActionCreator';
import { getEmployees } from 'src/actions/Employees/ActionCreator';
import { getListMoodOfEmployee } from 'src/actions/ListMoodOfEmployee/ActionCreator';
import { useDispatch, useSelector } from 'react-redux';
import RootState from 'src/states';
import convertDateToUnix from 'src/utilsLogic/Date/ConvertDateToUnix';
import { getCauses } from 'src/actions/Causes/ActionCreator';
import { updateDisplaySpan, resetDate } from 'src/actions/DisplayDate/DisplayDateActionCreator';
import { getDepartments } from 'src/actions/Departments/ActionCreator';
import { getListMoodOfDepartment } from 'src/actions/ListMoodOfDepartment/ActionCreator';

const DashBoard: React.FC = () => {
  const displaySpan = useSelector<RootState, RootState['displayDateState']['displaySpan']>(
    state => state.displayDateState.displaySpan
  );
  const dispatch = useDispatch();

  useEffect(() => {
    const initialRequestBeginDate = convertDateToUnix(displaySpan[0]);
    const initialRequestEndDate = convertDateToUnix(displaySpan[displaySpan.length - 1]);
    console.log(displaySpan[0]);
    console.log(displaySpan[displaySpan.length - 1]);
    console.log(initialRequestBeginDate);
    console.log(initialRequestEndDate);
    dispatch(getMoods.request({}));
    dispatch(getCauses.request({}));
    dispatch(getEmployees.request({}));
    dispatch(getDepartments.request({}));
    dispatch(
      getListMoodOfEmployee.request({
        employee_id: 'hoge',
        begin_date: initialRequestBeginDate,
        end_date: initialRequestEndDate,
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
      dispatch(resetDate());
      dispatch(updateDisplaySpan({ displaySpan: dates }));
      const begin_date = convertDateToUnix(new Date(dates[0]));
      const end_date = convertDateToUnix(new Date(dates[dates.length - 1]));
      console.log(begin_date);
      console.log(end_date);
      dispatch(getListMoodOfEmployee.request({ employee_id: 'hoge', begin_date, end_date }));
      dispatch(getListMoodOfDepartment.request({ department_id: 'hoge', begin_date, end_date }));
    }
  };

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
              {/* <Route path='/mymoods' component={MyMoods} /> */}
              <Route path='/ranking' component={Ranking} />
              {/* <Route path='/moodsmap' component={MoodsMap} /> */}
            </Switch>
          </main>
        </div>
      </StyledThemeProvider>
    </MuiThemeProvider>
  );
};

export default DashBoard;
