import React from 'react';
import PaperStyled from '@material-ui/core/Paper';
import TableHeader from './Table/TableHeader';
import TableBody from './Table/TableList';
import styled from 'styled-components';

const HomeScreen = () => {
  return (
    <StyledHomeScreen>
      <Paper>
        <TableHeader />
        <TableBody />
      </Paper>
    </StyledHomeScreen>
  );
};

export default HomeScreen;

const StyledHomeScreen = styled.div`
  min-width: 700px;
  height: calc(100% - ${({ theme }) => theme.spacing(8)}px);
`;

const Paper = styled(PaperStyled)`
  height: 100%;
  display: grid;
  grid-template-rows: 95px 1fr;
`;
