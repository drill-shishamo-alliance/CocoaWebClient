import styled from 'styled-components';
import { ResponsiveContainer } from 'recharts';
import { Zap } from 'styled-icons/octicons/Zap';

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

export const Material = styled(Zap)`
  font-size: 20px;
`;

export const Svg = styled('img')`
  width: 20px;
  height: 20px;
`;

export const Horizontal = styled('p')`
  display: inline-block;
  margin: 10px;
`;
