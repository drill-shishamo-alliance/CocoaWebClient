import * as React from 'react';
import Paper from '@material-ui/core/Paper';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import styles from './TableStyles';
import { tabName } from 'src/states/DisplayDate/DisplayDate';
import { useDispatch } from 'react-redux';
import { tabClicked } from 'src/actions/DisplayDate/displayDateActionCreator';

const TableTab: React.FC = () => {
  const classes = styles();
  const [value, setValue] = React.useState(0);
  const dispatch = useDispatch();

  const handleChange = (event: React.ChangeEvent<{}>, newValue: number) => {
    setValue(newValue);
    let newTab = '';
    if (newValue === 0) {
      newTab = tabName.week;
    } else if (value === 1) {
      newTab = tabName.month;
    }
    dispatch(tabClicked({ tabName: newTab }));
  };

  return (
    <Paper square className={classes().tabSize}>
      <Tabs value={value} indicatorColor='primary' textColor='primary' onChange={handleChange}>
        <Tab label='週ごと' />
        <Tab label='月ごと' />
      </Tabs>
    </Paper>
  );
};

export default TableTab;
