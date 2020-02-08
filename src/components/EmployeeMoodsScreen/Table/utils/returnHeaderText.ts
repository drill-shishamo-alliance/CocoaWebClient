import { formatDate, DateFormatType } from 'src/utilsUI/Date/FormatDate';
import { tabName } from 'src/states/DisplayDate/DisplayDate';

export const returnHeaderText = (
  displaySpan: Date[],
  displayTab: string,
  displayMonday: Date
): string[] => {
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
      const displayYear = displayMonday.getFullYear();
      const displayMonth = displayMonday.getMonth() + 1;
      headerText = [`${displayYear}年${displayMonth}月1週目`, '2週目', '3週目', '4週目', '5週目'];
      break;
  }
  return headerText;
};
