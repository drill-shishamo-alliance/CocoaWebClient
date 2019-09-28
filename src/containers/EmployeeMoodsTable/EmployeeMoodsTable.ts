import {
  EmployeeMoodsConnectedProps,
  EmployeeMoodsDispatchProps,
} from 'src/components/EmployeeMoods/Table/EmployeeMoodsTable/EmployeeMoodsTableProps';
import RootState from 'src/states';
import { connect } from 'react-redux';
import EmployeeMoodsTable from 'src/components/EmployeeMoods/Table/EmployeeMoodsTable/EmployeeMoodsTable';
import { Dispatch } from 'redux';
import EmployeeMoodsAction from 'src/actions/EmployeeMoods/EmployeeMoodsAction';
import {
  getEmployeeMoods,
  selectEmployee,
} from 'src/actions/EmployeeMoods/EmployeeMoodsActionCreator';
import MoodsAction from 'src/actions/Moods/MoodsAction';
import { getMoods } from 'src/actions/Moods/MoodsActionCreator';
import EmployeeMoods from 'src/apis/EmployeeMoodsApi/EmployeeMoodsTableResponse/EmployeeMoods';

const mapStateToProps = (state: RootState): EmployeeMoodsConnectedProps => ({
  employeeMoodsState: state.employeeMoodsState.employees,
});

const mapDispatchToProps = (
  dispatch: Dispatch<EmployeeMoodsAction | MoodsAction>
): EmployeeMoodsDispatchProps => ({
  selectEmployee: (employeeMoods: EmployeeMoods) => dispatch(selectEmployee(employeeMoods)),
  getEmployeeMoodsRequest: (id?: number, accessToken?: string) =>
    dispatch(getEmployeeMoods.request({ id, access_token: accessToken })),
  getMoodsRequest: (accessToken?: string) =>
    dispatch(getMoods.request({ access_token: accessToken })),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(EmployeeMoodsTable);
