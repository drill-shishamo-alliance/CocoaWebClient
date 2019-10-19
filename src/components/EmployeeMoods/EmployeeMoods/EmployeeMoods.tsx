import React from 'react';
import { ScreenType } from './ScreenType';
import EmployeeMoodsTable from 'src/containers/EmployeeMoodsTable/EmployeeMoodsTable';
import EmployeeMoodsDetails from 'src/containers/EmployeeMoodsDetails/EmployeeMoodsDetails';

type EmployeeMoodsProps = {};
type EmployeeMoodsState = {
  screenType: ScreenType;
};

class EmployeeMoods extends React.Component<EmployeeMoodsProps, EmployeeMoodsState> {
  readonly state = {
    screenType: ScreenType.EMPLOYEE_TABLE,
  };

  public switchScreen = (screenType: ScreenType) => {
    this.setState({
      screenType,
    });
  };

  public render() {
    return (
      <div>
        {this.state.screenType === ScreenType.EMPLOYEE_TABLE && (
          <EmployeeMoodsTable switchScreen={this.switchScreen} />
        )}
        {this.state.screenType === ScreenType.EMPLOYEE_DETAILS && (
          <EmployeeMoodsDetails switchScreen={this.switchScreen} />
        )}
      </div>
    );
  }
}

export default EmployeeMoods;
