import styled from 'styled-components';
import { Button, TableCell, TableHead, Paper } from '@material-ui/core';

export const TableStyle = styled('div')`
  overflow: auto;
  height: 500px;
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
  top: 13%;
  right: 11%;
`;

export const NextButton = styled(Button)`
  position: absolute;
  top: 13%;
  right: 5%;
`;

export const PaperTab = styled(Paper)`
  flex-grow: 1;
  max-width: 320px;
`;
