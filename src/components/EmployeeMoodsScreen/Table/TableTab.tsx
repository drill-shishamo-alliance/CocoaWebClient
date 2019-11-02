import * as React from 'react';
import Paper from '@material-ui/core/Paper';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import styles from './TableStyles';

const TableTab: React.FC = () => {
  const classes = styles();
  const [value, setValue] = React.useState(0);

  const handleChange = (event: React.ChangeEvent<{}>, newValue: number) => {
    setValue(newValue);
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
