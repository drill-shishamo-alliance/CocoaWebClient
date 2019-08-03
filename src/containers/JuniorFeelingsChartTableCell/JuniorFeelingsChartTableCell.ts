import RootState from 'src/states';
import { JuniorFeelingsChartTableCellConnectedProps } from 'src/components/JuniorFeelings/JuniorFeelingsChartTable/JuniorFeelingsChartTableCell/JuniorFeelingsChartTableCellProps';
import { connect } from 'react-redux';
import JuniorFeelingsChartTableCell from 'src/components/JuniorFeelings/JuniorFeelingsChartTable/JuniorFeelingsChartTableCell/JuniorFeelingsChartTableCell';

const mapStateToProps = (state: RootState): JuniorFeelingsChartTableCellConnectedProps => ({
  feelings: state.FeelingsState,
});

export default connect(
  mapStateToProps,
  null
)(JuniorFeelingsChartTableCell);
