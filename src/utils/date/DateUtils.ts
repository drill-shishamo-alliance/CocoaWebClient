import dayjs from 'dayjs';

export enum DateFormatType {
  YY_MM_DD_dd = 'YYYY/MM/DD(dd)',
  MM_DD_dd = 'MM/DD(dd)',
}

export const formatDate = (date: Date, type: DateFormatType): string => {
  switch (type) {
    case DateFormatType.YY_MM_DD_dd:
      return dayjs(date)
        .locale('ja')
        .format('YYYY/MM/DD(dd)');
    case DateFormatType.MM_DD_dd:
      return dayjs(date)
        .locale('ja')
        .format('MM/DD(dd)');
    default:
      return '';
  }
};
