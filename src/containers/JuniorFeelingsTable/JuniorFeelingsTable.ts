import {
  JuniorFeelingsConnectedProps,
  JuniorFeelingsDispatchProps,
} from 'src/components/JuniorFeelings/Table/JuniorFeelingsTable/JuniorFeelingsTableProps';
import RootState from 'src/states';
import { connect } from 'react-redux';
import JuniorFeelingsTable from 'src/components/JuniorFeelings/Table/JuniorFeelingsTable/JuniorFeelingsTable';
import { Dispatch } from 'redux';
import JuniorFeelingsAction from 'src/actions/JuniorFeelings/JuniorFeelingsAction';
import {
  getJuniorFeelings,
  selectJunior,
} from 'src/actions/JuniorFeelings/JuniorFeelingsActionCreator';
import FeelingsAction from 'src/actions/Feelings/FeelingsAction';
import { getFeelings } from 'src/actions/Feelings/FeelingsActionCreator';
import JuniorFeelings from 'src/apis/JuniorFeelingsApi/JuniorFeelingsTableResponse/JuniorFeelings';

const mapStateToProps = (state: RootState): JuniorFeelingsConnectedProps => ({
  juniorFeelingsState: state.juniorFeelingsState.juniors,
});

const mapDispatchToProps = (
  dispatch: Dispatch<JuniorFeelingsAction | FeelingsAction>
): JuniorFeelingsDispatchProps => ({
  selectJunior: (juniorFeelings: JuniorFeelings) => dispatch(selectJunior(juniorFeelings)),
  getJuniorFeelingsRequest: (id?: number, accessToken?: string) =>
    dispatch(getJuniorFeelings.request({ id, access_token: accessToken })),
  getFeelingsRequest: (accessToken?: string) =>
    dispatch(getFeelings.request({ access_token: accessToken })),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(JuniorFeelingsTable);
