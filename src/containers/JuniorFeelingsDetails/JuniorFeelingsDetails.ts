import RootState from 'src/states';
import { connect } from 'react-redux';
import JuniorFeelingsDetails from 'src/components/JuniorFeelings/Details/JuniorFeelingsDetails/JuniorFeelingsDetails';
import { JuniorFeelingsDetailsConnectedProps } from 'src/components/JuniorFeelings/Details/JuniorFeelingsDetails/JuniorFeelingsDetailsProps';

const mapStateToProps = (state: RootState): JuniorFeelingsDetailsConnectedProps => ({
  juniorFeelingsState: state.juniorFeelingsState,
  feelings: state.FeelingsState,
});

const mapDispatchToProps = {};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(JuniorFeelingsDetails);
