import { formatDate, DateFormatType } from 'src/utilsUI/Date/FormatDate';

export const HeaderText = (): string[] => {
  let headerText: string[] = [];
  let today = new Date();
  const fourDaysBefore = new Date(today.setDate(today.getDate() - 6)); // 平日を入れないため6日前が過去５日間の中で一番過去の日となる
  // もし6日前が日曜か土曜だったら月曜に変更する
  if (fourDaysBefore.getDay() === 0) {
    new Date(fourDaysBefore.setDate(fourDaysBefore.getDate() + 1));
  } else if (fourDaysBefore.getDay() === 6) {
    new Date(fourDaysBefore.setDate(fourDaysBefore.getDate() + 2));
  }
  const first = 0;

  // 今日を含めた過去5日間の日付を表示する(土日を除く)
  for (let index = 0; index < 5; index++) {
    if (index === first) {
      headerText.push(formatDate(fourDaysBefore, DateFormatType.YY_MM_DD_dd));
    } else {
      new Date(fourDaysBefore.setDate(fourDaysBefore.getDate() + 1));
      if (fourDaysBefore.getDay() === 0) {
        new Date(fourDaysBefore.setDate(fourDaysBefore.getDate() + 1));
      } else if (fourDaysBefore.getDay() === 6) {
        new Date(fourDaysBefore.setDate(fourDaysBefore.getDate() + 2));
      }
      headerText.push(formatDate(fourDaysBefore, DateFormatType.MM_DD_dd));
    }
  }
  return headerText;
};
