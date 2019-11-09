import { formatDate, DateFormatType } from 'src/utils/date/DateUtils';
import { tabName } from 'src/states/DisplayDate/DisplayDate';

export const returnHeaderText = (displaySpan: Date[], displayTab: string): string[] => {
  const first = 0;
  let headerText: string[] = [];
  switch (displayTab) {
    case tabName.week:
      displaySpan.forEach((date, index) => {
        if (index === first) {
          headerText.push(formatDate(date, DateFormatType.YY_MM_DD_dd));
        } else {
          headerText.push(formatDate(date, DateFormatType.MM_DD_dd));
        }
      });
      break;
    case tabName.month:
      const firstDate = displaySpan[0];
      const lastDate = displaySpan[displaySpan.length];
      const monday = 1;
      headerText.push(formatDate(firstDate, DateFormatType.YY_MM_DD_dd));
      displaySpan.forEach(date => {
        if (date.getDay() === monday && date !== firstDate && date !== lastDate) {
          headerText.push(formatDate(date, DateFormatType.MM_DD_dd));
        }
      });
      headerText.push(formatDate(lastDate, DateFormatType.MM_DD_dd));
      break;
  }
  return headerText;
};
