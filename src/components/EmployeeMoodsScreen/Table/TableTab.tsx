import * as React from 'react';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import { PaperTab } from './TableStyles';
import { tabName } from 'src/states/DisplayDate/DisplayDate';
import { useDispatch } from 'react-redux';
import { tabClicked } from 'src/actions/DisplayDate/DisplayDateActionCreator';

enum TabsValue {
  week = 0,
  month = 1,
}

const TableTab: React.FC = () => {
  const [value, setValue] = React.useState(0);
  const dispatch = useDispatch();

  const handleChange = (_: React.ChangeEvent<{}>, newValue: number) => {
    setValue(newValue);
    let newTab = '';
    if (newValue === TabsValue.week) {
      newTab = tabName.week;
    } else if (newValue === TabsValue.month) {
      newTab = tabName.month;
    }
    dispatch(tabClicked({ tabName: newTab }));
  };

  return (
    <PaperTab square>
      <Tabs value={value} indicatorColor='primary' textColor='primary' onChange={handleChange}>
        <Tab label='週ごと' />
        <Tab label='月ごと' />
      </Tabs>
    </PaperTab>
  );
};

export default TableTab;
