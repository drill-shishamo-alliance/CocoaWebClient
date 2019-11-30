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
  display: flex;
  justify-content: space-around;
`;

export const EmployeePosition = styled('h2')`
  flex-basis: 20%;
  align-self: center;
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
