import WeekMoods from 'src/apis/EmployeeMoodsApi/EmployeeMoodsTableResponse/WeekMoods';
import EmployeeMoodsDetailsAction from 'src/actions/EmployeeMoods/EmployeeMoodsDetails/EmployeeMoodsDetailsAction';
import EmployeeMoodsDetailsActionType from 'src/actions/EmployeeMoods/EmployeeMoodsDetails/EmployeeMoodsDetailsActionType';

const initialState: WeekMoods[] = [];

const employeeMoodsDetails = (
  state: WeekMoods[] = initialState,
  action: EmployeeMoodsDetailsAction
): WeekMoods[] => {
  switch (action.type) {
    case EmployeeMoodsDetailsActionType.GET_EMPLOYEE_MONTH_MOODS_SUCCESSED:
      return {
        ...state,
        ...action.payload,
      };

    default:
      return state;
  }
};

export default employeeMoodsDetails;
