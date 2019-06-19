import RootState from 'src/states';
import { IconTableCellConnectedProps } from 'src/components/JuniorFeelingsIconTableCell/JuniorFeelingsIconTableCellProps';
import { connect } from 'react-redux';
import JuniorFeelingsIconTableCell from 'src/components/JuniorFeelingsIconTableCell/JuniorFeelingsIconTableCell';

const mapStateToProps = (state: RootState): IconTableCellConnectedProps => ({
  feelings: state.FeelingsState,
});

export default connect(
  mapStateToProps,
  null
)(JuniorFeelingsIconTableCell);
