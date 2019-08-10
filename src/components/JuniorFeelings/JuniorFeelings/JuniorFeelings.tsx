import React from 'react';
import { ScreenType } from './ScreenType';
import JuniorFeelingsTable from 'src/containers/JuniorFeelingsTable/JuniorFeelingsTable';
import JuniorFeelingsDetails from 'src/containers/JuniorFeelingsDetails/JuniorFeelingsDetails';

type JuniorFeelingsProps = {};
type JuniorFeelingsState = {
  screenType: ScreenType;
};

class JuniorFeelings extends React.Component<JuniorFeelingsProps, JuniorFeelingsState> {
  readonly state = {
    screenType: ScreenType.JUNIOR_TABLE,
  };

  public switchScreen = (screenType: ScreenType) => {
    this.setState({
      screenType,
    });
  };

  public render() {
    return (
      <div>
        {this.state.screenType === ScreenType.JUNIOR_TABLE && (
          <JuniorFeelingsTable switchScreen={this.switchScreen} />
        )}
        {this.state.screenType === ScreenType.JUNIOR_DETAILS && <JuniorFeelingsDetails />}
      </div>
    );
  }
}

export default JuniorFeelings;
