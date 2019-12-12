import { formatDate, DateFormatType } from 'src/utilsUI/Date/FormatDate';

export const HeaderText = (dates: Date[]): string[] => {
  let headerText: string[] = [];
  const first = 0;

  dates.forEach((date, index) => {
    if (index === first) {
      headerText.push(formatDate(date, DateFormatType.YY_MM_DD_dd));
    } else {
      headerText.push(formatDate(date, DateFormatType.MM_DD_dd));
    }
  });

  return headerText;
};
