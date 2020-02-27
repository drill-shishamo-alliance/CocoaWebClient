import styled from 'styled-components';

export const StyledIconToolTip = styled('div')`
  position: absolute;
  z-index: 3;
  top: 60px;
  left: 50%;
  transform: translateX(-50%);
  -webkit-transform: translateX(-50%);
  text-align: center;
  background: white;
  border: solid 1px;
  border-color: #dcdcdc;
  font-size: 16px;
  color: black;
`;

export const Material = styled('i')`
  color: #4b4b4b;
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

export const Border = styled('p')`
  text-decoration: underline;
`;

export const Div = styled('div')`
  margin-right: 5px;
  margin-left: 5px;
  margin-bottom: 10px;
`;
