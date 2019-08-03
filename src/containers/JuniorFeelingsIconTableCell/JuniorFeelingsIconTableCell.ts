import RootState from 'src/states';
import { JuniorFeelingsIconTableCellConnectedProps } from 'src/components/JuniorFeelings/JuniorFeelingsIconTable/JuniorFeelingsIconTableCell/JuniorFeelingsIconTableCellProps';
import { connect } from 'react-redux';
import JuniorFeelingsIconTableCell from 'src/components/JuniorFeelings/JuniorFeelingsIconTable/JuniorFeelingsIconTableCell/JuniorFeelingsIconTableCell';

const mapStateToProps = (state: RootState): JuniorFeelingsIconTableCellConnectedProps => ({
  feelings: state.FeelingsState,
});

export default connect(
  mapStateToProps,
  null
)(JuniorFeelingsIconTableCell);
