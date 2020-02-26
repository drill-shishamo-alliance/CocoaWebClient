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
        return <div key={causeName}>{causeName}</div>;
      })}
    </StyledIconToolTip>
  );
};

export default IconToolTip;

const StyledIconToolTip = styled.div`
  position: absolute;
  z-index: 3;
  top: 60px;
  width: 100px;
  text-align: center;
  background: cyan;
  border: solid 1px;
`;
