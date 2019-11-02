import * as React from 'react';
import classNames from 'classnames';
import CssBaseline from '@material-ui/core/CssBaseline';
import { theme } from '../../utils/theme';
import { MuiThemeProvider, withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import Typography from '@material-ui/core/Typography';
import Drawer from '@material-ui/core/Drawer';
import RouteableDrawerList from './RouteableDrawerList';
import { Switch, Route, withRouter, Redirect } from 'react-router-dom';
import EmployeeMoodsScreen from 'src/components/EmployeeMoodsScreen/EmployeeMoodsScreen';
import Home from 'src/components/HomeScreen/Home';
import MyMoods from 'src/components/MyMoodsScreen/MyMoods';
import DepartmentalAnalysis from 'src/components/DepartmentalAnalysisScreen/DepartmentalAnalysis';
import MoodsMap from 'src/components/MoodsMapScreen/MoodsMap';
import styles from './AppStyles';
import State from './AppState';
import Props from './AppProps';

class Dashboard extends React.Component<Props, State> {
  state: State = {
    isOpenDrawer: false,
  };

  private handleDrawerOpen = () => {
    this.setState({ isOpenDrawer: !this.state.isOpenDrawer });
  };

  public routeMainContent = (route: string) => (e: React.MouseEvent<HTMLDivElement, MouseEvent>) =>
    this.props.history.push(route);

  render() {
    const { classes } = this.props;

    return (
      <MuiThemeProvider theme={theme}>
        <div className={classes.root}>
          <CssBaseline />
          <AppBar
            position='fixed'
            className={classNames(classes.appBar, this.state.isOpenDrawer && classes.appBarShift)}
          >
            <Toolbar className={classes.toolbar}>
              <IconButton
                className={classes.menuButton}
                color='inherit'
                aria-label='Open drawer'
                onClick={this.handleDrawerOpen}
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
              paper: classNames(
                classes.drawerPaper,
                !this.state.isOpenDrawer && classes.drawerPaperClose
              ),
            }}
            open={this.state.isOpenDrawer}
          >
            <RouteableDrawerList handleClick={this.routeMainContent} />
          </Drawer>
          <main
            className={classNames(classes.content, this.state.isOpenDrawer && classes.contentShift)}
          >
            <div className={classes.appBarSpacer} />
            <Switch>
              <Redirect from='/minio/cocoa-web' to='/minio/cocoa-web' />
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
  }
}

export default withRouter(withStyles(styles)(Dashboard));
