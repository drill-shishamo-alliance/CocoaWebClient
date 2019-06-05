import * as React from 'react';
import classNames from 'classnames';
import CssBaseline from '@material-ui/core/CssBaseline';
import { theme } from '../../utils/theme';
import { MuiThemeProvider, createStyles, Theme, withStyles, WithStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import Typography from '@material-ui/core/Typography';
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import { mainDrawerItems } from './DrawerItems';
import FeelingTable from 'src/components/FeelingTable/FeelingTable'

const drawerWidth = 240;

const styles = (theme: Theme) =>
  createStyles({
    root: {
      width: '100%',
      display: 'flex',
    },
    grow: {
      flexGrow: 1,
    },
    grow2: {
      flexGrow: 2,
    },
    appBar: {
      zIndex: theme.zIndex.drawer + 1,
      width: '100%',
      top: 0,
      transition: theme.transitions.create(['width', 'margin'], {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
      }),
    },
    appBarShift: {
      // marginLeft: drawerWidth,
      // width: `calc(100% - ${drawerWidth}px)`,
      transition: theme.transitions.create(['width', 'margin'], {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.enteringScreen,
      }),
    },
    toolbar: {
      minHeight: 56,
      [theme.breakpoints.up('xs')]: {
        minHeight: 48,
      },
      [theme.breakpoints.up('sm')]: {
        minHeight: 64,
      },
    },
    menuButton: {
      marginLeft: -20,
      marginRight: 20,
    },
    title: {
      display: 'none',
      [theme.breakpoints.up('sm')]: {
        display: 'block',
      },
    },
    sectionDesktop: {
      display: 'none',
      [theme.breakpoints.up('md')]: {
        display: 'flex',
      },
    },
    drawerPaper: {
      position: 'fixed',
      whiteSpace: 'nowrap',
      width: drawerWidth,
      // marginLeft: theme.spacing.unit,
      top: 56,
      [theme.breakpoints.up('xs')]: {
        top: 48,
      },
      [theme.breakpoints.up('sm')]: {
        top: 64,
      },
      transition: theme.transitions.create('width', {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.enteringScreen,
      }),
    },
    drawerPaperClose: {
      overflowX: 'hidden',
      transition: theme.transitions.create('width', {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
      }),
      width: theme.spacing(6),
      [theme.breakpoints.up('sm')]: {
        width: theme.spacing(8),
      },
    },
    appBarSpacer: theme.mixins.toolbar,
    content: {
      flexGrow: 1,
      padding: theme.spacing(3),
      marginLeft: theme.spacing(7),
      width: `calc(100% - ${theme.spacing(7)}px)`,
      height: 'auto',
      overflow: 'auto',
      transition: theme.transitions.create(['width', 'margin'], {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.enteringScreen,
      }),
    },
    contentShift: {
      marginLeft: drawerWidth,
      width: `calc(100% - ${drawerWidth}px)`,
    },
  });

  export interface Props extends WithStyles<typeof styles> {}

  interface State {
    anchorEl: null | HTMLElement;
    isOpenDrawer: boolean;
  }

  class Dashboard extends React.Component<Props, State> {
    state: State = {
      anchorEl: null,
      isOpenDrawer: false,
    };
  
    private handleDrawerOpen = () => {
      this.setState({ isOpenDrawer: !this.state.isOpenDrawer });
    };
  
    handleProfileMenuOpen = (event: React.MouseEvent<HTMLElement>) => {
      this.setState({ anchorEl: event.currentTarget });
    };
  
    handleMenuClose = () => {
      this.setState({ anchorEl: null });
    };
  
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
              <List>{mainDrawerItems}</List>
            </Drawer>
            <main
              className={classNames(classes.content, this.state.isOpenDrawer && classes.contentShift)}
            >
              <div className={classes.appBarSpacer} />
              <FeelingTable />
            </main>
          </div>
        </MuiThemeProvider>
      );
    }
  }
  
  export default withStyles(styles)(Dashboard);