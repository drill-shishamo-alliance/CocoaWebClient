import styled from 'styled-components';
import { Button, TableCell, TableHead, Paper } from '@material-ui/core';

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
  grid-template-columns: 1fr 80%;
`;

export const EmployeeHeaderWrapper = styled('div')`
  grid-column: 2;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
`;

export const EmployeePosition = styled('h2')`
  flex-basis: 20%;
  align-self: center;
  grid-row: 1;
`;

export const DangerEmployeePosition = styled('h2')`
  flex-basis: 20%;
  align-self: center;
  grid-row: 1;
  color: red;
`;

export const NotDataTextPosition = styled('div')`
  flex-basis: 80%;
  align-self: center;
  grid-row: 1;
`;

export const PrevButton = styled(Button)`
  position: absolute;
  right: 11%;
  margin-right: 40px;
  margin-top: 48px; // 左に存在するタブ分下げる
`;

export const NextButton = styled(Button)`
  position: absolute;
  right: 5%;
  margin-top: 48px; // 左に存在するタブ分下げる
`;

export const PaperTab = styled(Paper)`
  flex-grow: 1;
  max-width: 320px;
`;
