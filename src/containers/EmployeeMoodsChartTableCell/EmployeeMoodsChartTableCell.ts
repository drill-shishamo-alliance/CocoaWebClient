import RootState from 'src/states';
import { EmployeeMoodsChartTableCellConnectedProps } from 'src/components/EmployeeMoods/Table/EmployeeMoodsChartTable/EmployeeMoodsChartTableCell/EmployeeMoodsChartTableCellProps';
import { connect } from 'react-redux';
import EmployeeMoodsChartTableCell from 'src/components/EmployeeMoods/Table/EmployeeMoodsChartTable/EmployeeMoodsChartTableCell/EmployeeMoodsChartTableCell';

const mapStateToProps = (state: RootState): EmployeeMoodsChartTableCellConnectedProps => ({
  moods: state.MoodsState,
});

const mapDispatchToProps = {};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(EmployeeMoodsChartTableCell);
