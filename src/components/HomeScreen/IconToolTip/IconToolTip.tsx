import React from 'react';
import { StyledIconToolTip, Margin, Border, Div } from './IconToolTipStyles';
import GetIcon from 'src/utilsComponent/Icon/GetIcon';

type Props = {
  causeNames: string[];
};

const IconToolTip: React.FC<Props> = props => {
  const { causeNames } = props;

  return (
    <StyledIconToolTip>
      <Border>原因</Border>
      {causeNames.length !== 0 ? (
        causeNames.map(causeName => {
          return (
            <Div key={causeName}>
              <GetIcon causeName={causeName} />
              <Margin>{causeName}</Margin>
            </Div>
          );
        })
      ) : (
        <Div>未入力</Div>
      )}
    </StyledIconToolTip>
  );
};

export default IconToolTip;
