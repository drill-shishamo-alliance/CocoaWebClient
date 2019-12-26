import { getListMoodOfDepartment } from 'src/actions/ListMoodOfDepartment/ActionCreator';
import { getListMoodOfDepartmentOnAjax } from 'src/apis/ListMoodOfDepartment/GetListMoodOfDepartment';
import { PromiseGenericType } from 'src/utilsLogic/types/TypeUtils';
import { call, put } from 'redux-saga/effects';

export function* getListMoodOfDepartmentSaga(
  action: ReturnType<typeof getListMoodOfDepartment.request>
) {
  const response: PromiseGenericType<ReturnType<typeof getListMoodOfDepartmentOnAjax>> = yield call(
    getListMoodOfDepartmentOnAjax,
    {
      department_id: 'hoge',
      begin_date: action.payload.begin_date,
      end_date: action.payload.end_date,
    }
  );

  if (response.status === 200 && response.data) {
    yield put(getListMoodOfDepartment.success(response.data));
  } else {
    yield put(getListMoodOfDepartment.failure(new Error('getListMoodOfDepartment error')));
  }
}
