import RootState from 'src/states';
import { JuniorFeelingsChartTableCellConnectedProps } from 'src/components/JuniorFeelings/Table/JuniorFeelingsChartTable/JuniorFeelingsChartTableCell/JuniorFeelingsChartTableCellProps';
import { connect } from 'react-redux';
import JuniorFeelingsChartTableCell from 'src/components/JuniorFeelings/Table/JuniorFeelingsChartTable/JuniorFeelingsChartTableCell/JuniorFeelingsChartTableCell';

const mapStateToProps = (state: RootState): JuniorFeelingsChartTableCellConnectedProps => ({
  feelings: state.FeelingsState,
});

const mapDispatchToProps = {};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(JuniorFeelingsChartTableCell);
