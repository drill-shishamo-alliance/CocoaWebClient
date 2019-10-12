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
import CurrentDisplayedDateAction from 'src/actions/CurrentDisplayedDate/CurrentDisplayedDateAction';
import {
  nextMonth,
  nextWeek,
  previousWeek,
  previousMonth,
} from 'src/actions/CurrentDisplayedDate/CurrentDisplayedDateActionCreator';

const mapStateToProps = (state: RootState): EmployeeMoodsDetailsConnectedProps => ({
  employeeMoodsState: state.employeeMoodsState,
  moods: state.MoodsState,
  currentDisplayedDate: state.currentDisplayedDateState,
});

const mapDispatchToProps = (
  dispatch: Dispatch<EmployeeMoodsDetailsAction | CurrentDisplayedDateAction>
): EmployeeMoodsDetailsDispatchProps => ({
  getEmployeeMonthMoodsRequest: (year: number, month: number) =>
    dispatch(getEmployeeMonthMoods.request({ year, month })),
  nextWeek: () => dispatch(nextWeek()),
  previousWeek: () => dispatch(previousWeek()),
  nextMonth: () => dispatch(nextMonth()),
  previousMonth: () => dispatch(previousMonth()),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(EmployeeMoodsDetails);
