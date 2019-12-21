import styled from 'styled-components';
import { TableCell, TableHead, Paper } from '@material-ui/core';

export const TableStyle = styled('div')`
  overflow: scroll;
  height: 100%;
  grid-row: 2;
`;

export const Header = styled(TableHead)`
  background-color: white;
  height: 100%;
`;

export const Cell = styled(TableCell)`
  display: grid;
  justify-content: space-around;
  grid-template-columns: 1fr 1fr 60%;
`;

export const DepartmentPosition = styled('h2')`
  flex-basis: 20%;
  align-self: center;
  grid-row: 1;
`;

export const RankPosition = styled('h2')`
  flex-basis: 20%;
  align-self: center;
  grid-row: 1;
`;

export const DatePosition = styled('h2')`
  flex-basis: 80%;
  align-self: center;
  grid-row: 1;
`;

export const PaperTab = styled(Paper)`
  flex-grow: 1;
  max-width: 320px;
`;
