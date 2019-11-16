import styled from 'styled-components';
import { Button, TableCell, TableHead, Paper } from '@material-ui/core';

export const TableStyle = styled('div')`
  overflow: auto;
  height: 90%;
`;

export const Header = styled(TableHead)`
  background-color: white;
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
  padding-top: calc(48px + 5px); // 左に存在するタブ分下げてから必要分足す
`;

export const NextButton = styled(Button)`
  position: absolute;
  right: 5%;
  padding-top: calc(48px + 5px);
`;

export const PaperTab = styled(Paper)`
  flex-grow: 1;
  max-width: 320px;
`;
