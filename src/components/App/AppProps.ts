import styles from './AppStyles';
import { WithStyles } from '@material-ui/core/styles';
import { RouteComponentProps } from 'react-router';

type AppProps = WithStyles<typeof styles> & RouteComponentProps;
export default AppProps;
