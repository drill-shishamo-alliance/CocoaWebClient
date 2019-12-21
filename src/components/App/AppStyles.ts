import { Toolbar, IconButton, Typography, AppBar, Drawer } from '@material-ui/core';
import styled, { css } from 'styled-components';

const drawerWidth = 240;

interface rootAppBarProps {
  is_open_drawer: number;
}

export const Root = styled('div')`
  width: 100%;
  display: flex;
`;

export const RootAppBar = styled(AppBar)<Pick<rootAppBarProps, 'is_open_drawer'>>`
  z-index: ${({ theme }) => theme.zIndex.drawer} + 1;
  width: 100%;
  top: 0;
  transition: ${({ theme }) =>
    theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    })};

  ${({ is_open_drawer }) =>
    is_open_drawer
      ? css`
          transition: ${({ theme }) =>
            theme.transitions.create(['width', 'margin'], {
              easing: theme.transitions.easing.sharp,
              duration: theme.transitions.duration.enteringScreen,
            })};
        `
      : ''}
`;

export const DrawerPaper = styled(Drawer)<Pick<rootAppBarProps, 'is_open_drawer'>>`
  position: fixed;
  white-space: nowrap;
  width: ${drawerWidth};
  top: 56px;
  ${({ theme }) => theme.breakpoints.up('xs')} {
    top: 48px;
  }
  ${({ theme }) => theme.breakpoints.up('sm')} {
    top: 64px;
  }
  transition: ${({ theme }) =>
    theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    })};

  ${({ is_open_drawer }) =>
    is_open_drawer
      ? css`
    overflow-x: hidden;
    transition: ${({ theme }) =>
      theme.transitions.create(['width', 'margin'], {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
      })};
    width: ${({ theme }) => theme.spacing(6)},
    ${({ theme }) => theme.breakpoints.up('xs')} {
      width: ${({ theme }) => theme.spacing(8)}
    }};
    `
      : ''}
`;

export const ToolBar = styled(Toolbar)`
  min-height: 56px;
  ${({ theme }) => theme.breakpoints.up('xs')} {
    min-height: 48px;
  }
  ${({ theme }) => theme.breakpoints.up('sm')} {
    min-height: 64px;
  }
`;

export const MenuButton = styled(IconButton)`
  margin-left: -20px;
  margin-right: 20px;
`;

export const Title = styled(Typography)`
  display: none;
  ${({ theme }) => theme.breakpoints.up('sm')} {
    display: block;
  }
`;

export const AppBarSpacer = styled('div')`
  ${({ theme }) => theme.mixins.toolbar}
`;

export const Main = styled('main')<Pick<rootAppBarProps, 'is_open_drawer'>>`
  flex-grow: 1;
  padding: ${({ theme }) => theme.spacing(3)};
  margin-left: ${({ theme }) => theme.spacing(7)};
  width: calc(100% - ${({ theme }) => theme.spacing(7)}px);
  height: 100vh;
  overflow: auto;
  transition: ${({ theme }) =>
    theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    })};

  ${({ is_open_drawer }) =>
    is_open_drawer
      ? css`
          margin-left: ${drawerWidth};
          width: calc(100% - ${drawerWidth}px);
        `
      : ''}
`;
