import React, { useState, useEffect } from 'react';
import { theme } from 'src/utilsUI/theme';
import {
  MenuButton,
  Root,
  ToolBar,
  Title,
  AppBarSpacer,
  RootAppBar,
  DrawerPaper,
  Main,
} from './AppStyles';
import { MuiThemeProvider } from '@material-ui/core/styles';
import { ThemeProvider as StyledThemeProvider } from 'styled-components';
import { CssBaseline } from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
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
import { getCauses } from 'src/actions/Causes/ActionCreator';
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
    dispatch(getCauses.request({}));
    dispatch(getEmployees.request({}));
    dispatch(
      getListMoodOfEmployee.request({
        beginDate: initialRequestBeginDate,
        endDate: initialRequestEndDate,
      })
    );
  }, []);

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
      <StyledThemeProvider theme={theme}>
        <Root>
          <CssBaseline />
          <RootAppBar position='fixed' is_open_drawer={isOpenDrawer ? 1 : 0}>
            <ToolBar>
              <MenuButton color='inherit' aria-label='Open drawer' onClick={handleDrawerOpen}>
                <MenuIcon />
              </MenuButton>
              <Title variant='h6' color='inherit' noWrap>
                Cocoa Web Client
              </Title>
            </ToolBar>
          </RootAppBar>
          <DrawerPaper
            variant='permanent'
            is_open_drawer={!isOpenDrawer ? 1 : 0}
            open={isOpenDrawer}
          >
            <DrawerList handleClick={routeMainContent} />
          </DrawerPaper>
          <Main is_open_drawer={isOpenDrawer ? 1 : 0}>
            <AppBarSpacer />
            <Switch>
              <Route exact path='/' component={Home} />
              <Route path='/employeemoods' component={EmployeeMoodsScreen} />
              <Route path='/mymoods' component={MyMoods} />
              <Route path='/departmentalanalysis' component={DepartmentalAnalysis} />
              <Route path='/moodsmap' component={MoodsMap} />
            </Switch>
          </Main>
        </Root>
      </StyledThemeProvider>
    </MuiThemeProvider>
  );
};

export default DashBoard;
