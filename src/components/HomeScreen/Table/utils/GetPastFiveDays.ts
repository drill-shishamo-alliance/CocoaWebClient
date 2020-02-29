export const GetPastFiveDays = (): Date[] => {
  let dates: Date[] = [];
  let today = new Date();
  const targetDate = new Date(today.setDate(today.getDate() - 6)); // 平日を入れないため6日前が過去５日間の中で一番過去の日となる
  const Saturday = 6;
  const Sunday = 0;
  let pushDate = new Date();

  // 今日を含めた過去5日間の日付を表示する(土日を除く)
  for (let index = 0; index < 5; index++) {
    if (targetDate.getDay() === Sunday) {
      targetDate.setDate(targetDate.getDate() + 1);
    } else if (targetDate.getDay() === Saturday) {
      targetDate.setDate(targetDate.getDate() + 2);
    }
    pushDate = new Date(targetDate);
    dates.push(pushDate);
    targetDate.setDate(targetDate.getDate() + 1);
  }

  dates[0].setHours(0);
  dates[0].setMinutes(0);
  dates[0].setSeconds(0);
  dates[dates.length - 1].setHours(23);
  dates[dates.length - 1].setMinutes(59);
  dates[dates.length - 1].setSeconds(59);

  return dates;
};
