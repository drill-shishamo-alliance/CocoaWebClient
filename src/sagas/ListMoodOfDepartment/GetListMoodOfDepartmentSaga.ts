import { getListMoodOfDepartment } from 'src/actions/ListMoodOfDepartment/ActionCreator';
import { getListMoodOfDepartmentOnAjax } from 'src/apis/ListMoodOfDepartment/GetListMoodOfDepartment';
import { PromiseGenericType } from 'src/utilsLogic/types/TypeUtils';
import { call, put } from 'redux-saga/effects';
import { returnRatioSum } from './utils/returnRatioSum';

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
    let res = response.data; // letにしないとreduceするときにエラー吐かれるためletに

    // Object -> 配列に変更して，keyでソート
    const responseList = Object.entries(res)
      .map(([key, value]) => ({ key, value }))
      .sort(function(a, b) {
        if (returnRatioSum(a.value.moods_ratio) < returnRatioSum(b.value.moods_ratio)) {
          return 1;
        } else {
          return -1;
        }
      });

    // 配列 -> Objectに変更
    const sortRes = responseList.reduce((res, item) => ({ ...res, [item.key]: item.value }), {});

    yield put(getListMoodOfDepartment.success(sortRes));
  } else {
    yield put(getListMoodOfDepartment.failure(new Error('getListMoodOfDepartment error')));
  }
}
