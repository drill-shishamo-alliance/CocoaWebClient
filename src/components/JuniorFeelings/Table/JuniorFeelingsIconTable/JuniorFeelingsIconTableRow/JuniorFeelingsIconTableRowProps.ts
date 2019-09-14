import { WithStyles } from '@material-ui/core';
import styles from './JuniorFeelingsIconTableRowStyles';
import JuniorFeelings from 'src/apis/JuniorFeelingsApi/JuniorFeelingsTableResponse/JuniorFeelings';

type JuniorFeelingsIconTableRowOwnProps = {
  weekIndex: number;
  juniorData: JuniorFeelings;
  handleClick: (
    juniorFeelings: JuniorFeelings
  ) => (event: React.MouseEvent<HTMLElement, MouseEvent>) => void;
};

type JuniorFeelingsIconTableRowProps = WithStyles<typeof styles> &
  JuniorFeelingsIconTableRowOwnProps;

export default JuniorFeelingsIconTableRowProps;
