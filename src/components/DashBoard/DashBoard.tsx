import React, { useState, useEffect } from 'react';
import { theme } from 'src/utilsUI/theme';
import AppStyles from './DashBoardStyles';
import { MuiThemeProvider } from '@material-ui/core/styles';
import { ThemeProvider as StyledThemeProvider } from 'styled-components';
import { CssBaseline, AppBar, Toolbar, IconButton, Typography, Drawer } from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import classNames from 'classnames';
import DrawerList from './DrawerList';
import Home from '../HomeScreen/HomeScreen';
import EmployeeMoodsScreen from '../EmployeeMoodsScreen/EmployeeMoodsScreen';
import Ranking from '../RankingScreen/RankingScreen';
import { Switch, Route, useHistory, BrowserRouter } from 'react-router-dom';
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

let currentPath = '/app';

const DashBoard: React.FC = () => {
  const classes = AppStyles();
  const [isOpenDrawer, setIsOpenDrower] = useState(false);
  const dispatch = useDispatch();
  const history = useHistory();
  const isLoggedIn = useSelector<RootState, RootState['UserState']['isLoggedIn']>(
    state => state.UserState.isLoggedIn
  );
  const employee_id = useSelector<RootState, RootState['UserState']['employeeId']>(
    state => state.UserState.employeeId
  );
  const department_id = useSelector<RootState, RootState['UserState']['departmentId']>(
    state => state.UserState.departmentId
  );

  useEffect(() => {
    if (!isLoggedIn) {
      history.push('/login');
    }
    dispatch(getMoods.request({ departmentId: department_id }));
    dispatch(getCauses.request({ departmentId: department_id }));
    dispatch(getEmployees.request({}));
    dispatch(getDepartments.request({}));
  }, []);

  const handleDrawerOpen = () => {
    setIsOpenDrower(!isOpenDrawer);
  };

  const onClickDrawerItem = (route: string, dates?: Date[]) => () => {
    // if (route === '/app') {
    //   currentPath = route
    // } else {
    //   currentPath = `/app${route}`
    // }
    console.log(`onClickRoute:${route}`);
    currentPath = route;
    history.push(currentPath);
    if (dates !== undefined) {
      dispatch(resetDate());
      dispatch(updateDisplaySpan({ displaySpan: dates }));
      const begin_date = convertDateToUnix(new Date(dates[0]));
      const end_date = convertDateToUnix(new Date(dates[dates.length - 1]));
      dispatch(getListMoodOfEmployee.request({ employee_id, department_id, begin_date, end_date }));
      dispatch(getListMoodOfDepartment.request({ department_id: 1, begin_date, end_date }));
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
                Cocoa
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
            <DrawerList
              onClickDrawerItem={onClickDrawerItem}
              isOpenDrawer={isOpenDrawer}
              currentPath={currentPath}
            />
          </Drawer>
          <main className={classNames(classes.content, isOpenDrawer && classes.contentShift)}>
            <div className={classes.appBarSpacer} />
            <Route path='/app' component={Home} exact />
            <Route path='/app/employeemoods' component={EmployeeMoodsScreen} />
            <Route path='/app/ranking' component={Ranking} />
          </main>
        </div>
      </StyledThemeProvider>
    </MuiThemeProvider>
  );
};

export default DashBoard;
