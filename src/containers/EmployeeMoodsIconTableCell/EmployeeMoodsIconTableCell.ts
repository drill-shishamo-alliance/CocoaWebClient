import RootState from 'src/states';
import { EmployeeMoodsIconTableCellConnectedProps } from 'src/components/EmployeeMoods/Table/EmployeeMoodsIconTable/EmployeeMoodsIconTableCell/EmployeeMoodsIconTableCellProps';
import { connect } from 'react-redux';
import EmployeeMoodsIconTableCell from 'src/components/EmployeeMoods/Table/EmployeeMoodsIconTable/EmployeeMoodsIconTableCell/EmployeeMoodsIconTableCell';

const mapStateToProps = (state: RootState): EmployeeMoodsIconTableCellConnectedProps => ({
  moods: state.MoodsState,
});

const mapDispatchToProps = {};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(EmployeeMoodsIconTableCell);
