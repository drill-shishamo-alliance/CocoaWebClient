import RootState from 'src/states';
import { connect } from 'react-redux';
import JuniorFeelingsDetails from 'src/components/JuniorFeelings/Details/JuniorFeelingsDetails/JuniorFeelingsDetails';
import {
  JuniorFeelingsDetailsConnectedProps,
  JuniorFeelingsDetailsDispatchProps,
} from 'src/components/JuniorFeelings/Details/JuniorFeelingsDetails/JuniorFeelingsDetailsProps';
import { Dispatch } from 'redux';
import JuniorFeelingsDetailsAction from 'src/actions/JuniorFeelings/JuniorFeelingsDetails/JuniorFeelingsDetailsAction';
import { getJuniorMonthFeelings } from 'src/actions/JuniorFeelings/JuniorFeelingsDetails/JuniorFeelingsDetailsActionCreator';

const mapStateToProps = (state: RootState): JuniorFeelingsDetailsConnectedProps => ({
  juniorFeelingsState: state.juniorFeelingsState,
  feelings: state.FeelingsState,
});

const mapDispatchToProps = (
  dispatch: Dispatch<JuniorFeelingsDetailsAction>
): JuniorFeelingsDetailsDispatchProps => ({
  getJuniorMonthFeelingsRequest: () => dispatch(getJuniorMonthFeelings.request()),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(JuniorFeelingsDetails);
