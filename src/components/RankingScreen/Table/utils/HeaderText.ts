import { formatDate, DateFormatType } from 'src/utilsUI/Date/FormatDate';
import { tabName } from 'src/states/DisplayDate/DisplayDate';

export const HeaderText = (
  displaySpan: Date[],
  displayTab: string,
  displayMonday: Date
): string => {
  const first = 0;
  let headerText: string = '';
  switch (displayTab) {
    case tabName.week:
      const earlyWeek = formatDate(displaySpan[first], DateFormatType.YY_MM_DD_dd);
      const endWeek = formatDate(displaySpan[displaySpan.length - 1], DateFormatType.MM_DD_dd);
      headerText = earlyWeek + '~' + endWeek;
      break;
    case tabName.month:
      const displayYear = displayMonday.getFullYear();
      const displayMonth = displayMonday.getMonth() + 1;
      headerText = displayYear + '年' + displayMonth + '月';
      break;
  }
  return headerText;
};
