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

const mapStateToProps = (state: RootState): JuniorFeelingsConnectedProps => ({
  juniorFeelingsState: state.juniorFeelingsState,
});

const mapDispatchToProps = (
  dispatch: Dispatch<JuniorFeelingsAction>
): JuniorFeelingsDispatchProps => ({
  getJuniorFeelingsRequest: (id?: number, accessToken?: string) =>
    dispatch(getJuniorFeelings.request({ id, access_token: accessToken })),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(JuniorFeelings);
