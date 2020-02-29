import styled from 'styled-components';

export const StyledIconToolTip = styled('div')`
  position: absolute;
  z-index: 3;
  top: 75px;
  left: 50%;
  transform: translateX(-50%);
  -webkit-transform: translateX(-50%);
  text-align: center;
  background: white;
  border: solid 1px #dcdcdc;
  font-size: 16px;
  color: black;
  &::after,
  &::before {
    bottom: 100%;
    left: 50%;
    font-size: 16px;
    border: solid transparent;
    content: ' ';
    position: absolute;
    pointer-events: none;
  }
  &::after {
    border-color: rgba(255, 255, 255, 0);
    border-bottom-color: #ffffff;
    border-width: 20px;
    margin-left: -20px;
  }
  &::before {
    border-color: rgba(220, 220, 220, 0);
    border-bottom-color: #dcdcdc;
    border-width: 21px;
    margin-left: -21px;
  }
`;

export const Margin = styled('p')`
  margin: 10px;
`;

export const Border = styled('p')`
  text-decoration: underline;
`;

export const Div = styled('div')`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-right: 5px;
  margin-left: 5px;
  margin-bottom: 10px;
`;
