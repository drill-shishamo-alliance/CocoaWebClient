import React from 'react';
import { ScreenType } from './ScreenType';
import EmployeeMoodsTable from 'src/containers/EmployeeMoodsTable/EmployeeMoodsTable';
import EmployeeMoodsDetails from 'src/containers/EmployeeMoodsDetails/EmployeeMoodsDetails';

type EmployeeMoodsProps = {};
type EmployeeMoodsState = {
  screenType: ScreenType;
  weekIndex: number;
};

class EmployeeMoods extends React.Component<EmployeeMoodsProps, EmployeeMoodsState> {
  readonly state = {
    screenType: ScreenType.EMPLOYEE_TABLE,
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
        {this.state.screenType === ScreenType.EMPLOYEE_TABLE && (
          <EmployeeMoodsTable setWeekIndex={this.setWeekIndex} switchScreen={this.switchScreen} />
        )}
        {this.state.screenType === ScreenType.EMPLOYEE_DETAILS && (
          <EmployeeMoodsDetails switchScreen={this.switchScreen} weekIndex={this.state.weekIndex} />
        )}
      </div>
    );
  }
}

export default EmployeeMoods;
