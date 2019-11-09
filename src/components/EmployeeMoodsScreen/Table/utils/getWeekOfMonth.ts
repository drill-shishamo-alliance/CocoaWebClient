import { formatDate, DateFormatType } from 'src/utils/date/DateUtils';

export const getWeekOfMonth = (year: number, month: number, weekNumber: number) => {
  const start = new Date(year, month - 1, (weekNumber - 1) * 7 + 1);
  const day_num = start.getDay(); // その月の週初めの曜日番号
  let startDayParam = 0; // その週の月曜を取得するためのパラメーター
  if (day_num === 1) {
    // 月曜ならそのまま
    return;
  } else if (day_num === 0) {
    // 日曜なら+1
    startDayParam = 1;
  } else if (day_num === 6) {
    // 土曜なら+2
    startDayParam = 2;
  } else {
    // それ以外は曜日の分だけ日付を戻す
    startDayParam = -day_num + 1;
  }
  start.setDate(start.getDate() + startDayParam);
  const end = new Date(start);
  end.setDate(end.getDate() + 4);
  const dateStart = formatDate(start, DateFormatType.YY_MM_DD_dd);
  const dateEnd = formatDate(end, DateFormatType.MM_DD_dd);
  const targetWeek = `${dateStart} ~ ${dateEnd}`;
  return targetWeek;
};
