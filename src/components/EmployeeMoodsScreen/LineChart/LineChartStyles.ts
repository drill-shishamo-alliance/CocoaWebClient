import styled from 'styled-components';
import { ResponsiveContainer } from 'recharts';

export const ChartPosition = styled(ResponsiveContainer)`
  flex-basis: 80%;
`;

export const CustomContentOfToolTip = styled('div')`
  background-color: white;
  padding: 3px;
  border: solid 1px #dcdcdc;
`;

export const Border = styled('p')`
  text-decoration: underline;
`;

export const Margin = styled('p')`
  margin: 10px;
`;

export const Div = styled('div')`
  display: flex;
  justify-content: center;
  align-items: center;
`;
