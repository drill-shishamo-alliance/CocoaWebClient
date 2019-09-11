import RootState from 'src/states';
import { JuniorFeelingsIconTableCellConnectedProps } from 'src/components/JuniorFeelings/Table/JuniorFeelingsIconTable/JuniorFeelingsIconTableCell/JuniorFeelingsIconTableCellProps';
import { connect } from 'react-redux';
import JuniorFeelingsIconTableCell from 'src/components/JuniorFeelings/Table/JuniorFeelingsIconTable/JuniorFeelingsIconTableCell/JuniorFeelingsIconTableCell';

const mapStateToProps = (state: RootState): JuniorFeelingsIconTableCellConnectedProps => ({
  feelings: state.FeelingsState,
});

const mapDispatchToProps = {};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(JuniorFeelingsIconTableCell);
