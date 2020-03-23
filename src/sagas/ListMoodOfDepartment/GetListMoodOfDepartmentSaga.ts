import { getListMoodOfDepartment } from 'src/actions/ListMoodOfDepartment/ActionCreator';
import { getListMoodOfDepartmentOnAjax } from 'src/apis/ListMoodOfDepartment/GetListMoodOfDepartment';
import { PromiseGenericType } from 'src/utilsLogic/types/TypeUtils';
import { call, put, select } from 'redux-saga/effects';
import { MoodsRatio } from 'src/states/ListMoodOfDepartment/ListMoodOfDepartment';
import RootState from 'src/states';

export function* getListMoodOfDepartmentSaga(
  action: ReturnType<typeof getListMoodOfDepartment.request>
) {
  try {
    const response: PromiseGenericType<ReturnType<
      typeof getListMoodOfDepartmentOnAjax
    >> = yield call(getListMoodOfDepartmentOnAjax, {
      department_id: 0,
      begin_date: action.payload.begin_date,
      end_date: action.payload.end_date,
    });

    if (response.status === 200 && response.data) {
      const state: RootState = yield select();
      const moods = state.MoodsState;
      let res = { ...response.data }; // letにしないとreduceするときにエラー吐かれるためletに
      // 各割合に気分の重みをかける処理
      const returnRatioSum = (moods_ratio: MoodsRatio): number => {
        let ratio_sum = 0;
        Object.entries(moods_ratio).map(([key, value]) => {
          return (ratio_sum += moods_ratio[value.id].ratio * moods[value.id].weight);
        });
        return ratio_sum;
      };

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
  } catch (e) {
    yield put(getListMoodOfDepartment.failure(new Error(e)));
  }
}
