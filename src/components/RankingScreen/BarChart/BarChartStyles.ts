import styled from 'styled-components';
import { ResponsiveContainer } from 'recharts';

export const ChartPosition = styled(ResponsiveContainer)`
  flex-basis: 60%;
`;
export const CustomContentOfToolTip = styled('div')`
  padding: 3px;
  background-color: white;
  border: solid 1px #dcdcdc;
  z-index: 999;
`;
export const Border = styled('p')`
  text-decoration: underline;
`;
