import { JuniorFeelingsConnectedProps } from 'src/components/JuniorFeelings/JuniorFeelingsProps';
import RootState from 'src/states';
import { connect } from 'react-redux';
import JuniorFeelings from 'src/components/JuniorFeelings/JuniorFeelings';

const mapStateToProps = (state: RootState): JuniorFeelingsConnectedProps => ({
  juniorFeelingsState: state.juniorFeelingsState,
});

export default connect(
  mapStateToProps,
  null
)(JuniorFeelings);
