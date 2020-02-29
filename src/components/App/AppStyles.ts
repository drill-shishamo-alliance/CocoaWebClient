import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';

const drawerWidth = 210;
const headerMinHeightSM = 64;
const headerMinHeightXS = 48;

const AppStyles = makeStyles((theme: Theme) =>
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
      marginLeft: -18,
      minHeight: headerMinHeightSM,
      [theme.breakpoints.up('xs')]: {
        minHeight: headerMinHeightXS,
      },
      [theme.breakpoints.up('sm')]: {
        minHeight: headerMinHeightSM,
      },
    },
    menuButton: {},
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
      marginTop: headerMinHeightSM,
      [theme.breakpoints.up('xs')]: {
        top: headerMinHeightXS,
      },
      [theme.breakpoints.up('sm')]: {
        top: headerMinHeightSM,
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
      height: '100vh',
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
  })
);

export default AppStyles;
