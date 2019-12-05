import rootState from 'src/states';
import { connect } from 'react-redux';
import { LineChartConnectedProps } from 'src/components/EmployeeMoodsScreen/LineChart/LineChartProps';
import LineChart from 'src/components/EmployeeMoodsScreen/LineChart/LineChart';

const mapStateToProps = (state: rootState): LineChartConnectedProps => ({
  moods: state.MoodsState,
});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(LineChart);
