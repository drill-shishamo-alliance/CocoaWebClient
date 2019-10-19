import EmployeeMoodsDetailsAction from 'src/actions/EmployeeMoods/EmployeeMoodsDetails/EmployeeMoodsDetailsAction';
import EmployeeMoodsDetailsActionType from 'src/actions/EmployeeMoods/EmployeeMoodsDetails/EmployeeMoodsDetailsActionType';
import EmployeeMoods from 'src/apis/EmployeeMoodsApi/EmployeeMoodsTableResponse/EmployeeMoods';

const initialState: EmployeeMoods[] = [];

const employeeMoodsDetails = (
  state: EmployeeMoods[] = initialState,
  action: EmployeeMoodsDetailsAction
): EmployeeMoods[] => {
  switch (action.type) {
    case EmployeeMoodsDetailsActionType.GET_EMPLOYEE_MONTH_MOODS_SUCCESSED:
      return {
        ...state,
        ...action.payload.EmployeeMoodsData,
      };

    default:
      return state;
  }
};

export default employeeMoodsDetails;
