import RootState from 'src/states';
import { connect } from 'react-redux';
import EmployeeMoodsDetails from 'src/components/EmployeeMoods/Details/EmployeeMoodsDetails/EmployeeMoodsDetails';
import {
  EmployeeMoodsDetailsConnectedProps,
  EmployeeMoodsDetailsDispatchProps,
} from 'src/components/EmployeeMoods/Details/EmployeeMoodsDetails/EmployeeMoodsDetailsProps';
import { Dispatch } from 'redux';
import EmployeeMoodsDetailsAction from 'src/actions/EmployeeMoods/EmployeeMoodsDetails/EmployeeMoodsDetailsAction';
import { getEmployeeMonthMoods } from 'src/actions/EmployeeMoods/EmployeeMoodsDetails/EmployeeMoodsDetailsActionCreator';

const mapStateToProps = (state: RootState): EmployeeMoodsDetailsConnectedProps => ({
  employeeMoodsState: state.employeeMoodsState,
  moods: state.MoodsState,
});

const mapDispatchToProps = (
  dispatch: Dispatch<EmployeeMoodsDetailsAction>
): EmployeeMoodsDetailsDispatchProps => ({
  getEmployeeMonthMoodsRequest: (year: number, month: number) =>
    dispatch(getEmployeeMonthMoods.request({ year, month })),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(EmployeeMoodsDetails);
