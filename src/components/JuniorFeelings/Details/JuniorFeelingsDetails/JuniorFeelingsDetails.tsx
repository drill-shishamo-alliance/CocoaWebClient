import * as React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Props from './JuniorFeelingsDetailsProps';
import styles from './JuniorFeelingsDetatilsStyles';

class JuniorFeelingsDetails extends React.Component<Props> {
  render() {
    const { juniorFeelingsState } = this.props;
    const { selectJunior } = juniorFeelingsState.details;
    return <div>{selectJunior && <div>ここは{selectJunior.name}の詳細ページです</div>}</div>;
  }
}

export default withStyles(styles)(JuniorFeelingsDetails);
