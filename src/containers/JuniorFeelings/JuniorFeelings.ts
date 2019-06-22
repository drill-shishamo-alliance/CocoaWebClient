import {
  JuniorFeelingsConnectedProps,
  JuniorFeelingsDispatchProps,
} from 'src/components/JuniorFeelings/JuniorFeelingsProps';
import RootState from 'src/states';
import { connect } from 'react-redux';
import JuniorFeelings from 'src/components/JuniorFeelings/JuniorFeelings';
import { Dispatch } from 'redux';
import JuniorFeelingsAction from 'src/actions/JuniorFeelings/JuniorFeelingsAction';
import { getJuniorFeelings } from 'src/actions/JuniorFeelings/JuniorFeelingsActionCreator';
import FeelingsAction from 'src/actions/Feelings/FeelingsAction';
import { getFeelings } from 'src/actions/Feelings/FeelingsActionCreator';

const mapStateToProps = (state: RootState): JuniorFeelingsConnectedProps => ({
  juniorFeelingsState: state.juniorFeelingsState.juniors,
});

const mapDispatchToProps = (
  dispatch: Dispatch<JuniorFeelingsAction | FeelingsAction>
): JuniorFeelingsDispatchProps => ({
  getJuniorFeelingsRequest: (id?: number, accessToken?: string) =>
    dispatch(getJuniorFeelings.request({ id, access_token: accessToken })),
  getFeelingsRequest: (accessToken?: string) =>
    dispatch(getFeelings.request({ access_token: accessToken })),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(JuniorFeelings);
