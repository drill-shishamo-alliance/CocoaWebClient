import React from 'react';
import { ScreenType } from './ScreenType';
import JuniorFeelingsTable from 'src/containers/JuniorFeelingsTable/JuniorFeelingsTable';
import JuniorFeelingsDetails from 'src/containers/JuniorFeelingsDetails/JuniorFeelingsDetails';

type JuniorFeelingsProps = {};
type JuniorFeelingsState = {
  screenType: ScreenType;
  weekIndex: number;
};

class JuniorFeelings extends React.Component<JuniorFeelingsProps, JuniorFeelingsState> {
  readonly state = {
    screenType: ScreenType.JUNIOR_TABLE,
    weekIndex: 0,
  };

  public switchScreen = (screenType: ScreenType) => {
    this.setState({
      screenType,
    });
  };

  public setWeekIndex = (weekIndex: number) => {
    this.setState({
      weekIndex,
    });
  };

  public render() {
    return (
      <div>
        {this.state.screenType === ScreenType.JUNIOR_TABLE && (
          <JuniorFeelingsTable setWeekIndex={this.setWeekIndex} switchScreen={this.switchScreen} />
        )}
        {this.state.screenType === ScreenType.JUNIOR_DETAILS && (
          <JuniorFeelingsDetails
            switchScreen={this.switchScreen}
            weekIndex={this.state.weekIndex}
          />
        )}
      </div>
    );
  }
}

export default JuniorFeelings;
