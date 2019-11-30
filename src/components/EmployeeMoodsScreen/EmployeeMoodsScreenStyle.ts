import styled from 'styled-components';
import PaperStyled from '@material-ui/core/Paper';

export const Div = styled('div')`
  min-width: 700px;
  height: calc(100% - ${({ theme }) => theme.spacing(8)}px);
`;

export const Paper = styled(PaperStyled)`
  height: calc(100% - ${({ theme }) => theme.spacing(6)}px);
  display: grid;
  grid-template-rows: 95px 1fr;
`;
