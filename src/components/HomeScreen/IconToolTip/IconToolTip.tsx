import React from 'react';
import styled from 'styled-components';

type Props = {
  causeNames: string[];
};

const IconToolTip: React.FC<Props> = props => {
  const { causeNames } = props;

  return (
    <StyledIconToolTip>
      {causeNames.map(causeName => {
        return <StyledText key={causeName}>{causeName}</StyledText>;
      })}
    </StyledIconToolTip>
  );
};

export default IconToolTip;

const StyledText = styled.div`
  margin: 8px;
`;

const StyledIconToolTip = styled.div`
  position: absolute;
  z-index: 3;
  top: 60px;
  left: 50%;
  transform: translateX(-50%);
  -webkit-transform: translateX(-50%);
  width: 100px;
  text-align: center;
  background: white;
  border: solid 1px;
  font-size: 16px;
  color: black;
`;
