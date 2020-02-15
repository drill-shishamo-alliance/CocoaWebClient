// 日付とX週目を渡すと、その月のX週目の日付をDate配列として返してくれる関数
export default function getWeekOfMonth(date: Date, weekIndex: number): Date[] {
  const year = date.getFullYear();
  const month = date.getMonth();
  const beginDate = new Date(year, month, (weekIndex - 1) * 7 + 1); // その月の最初の日付
  const day_num = beginDate.getDay(); // その月の週初めの曜日番号
  let beginDayParam = 0; // その週の月曜を取得するためのパラメーター
  let targetDates: Date[] = [];

  const sunday = 0;
  const monday = 1;
  const saturday = 6;

  if (day_num === monday) {
    beginDayParam = 0;
  } else if (day_num === sunday) {
    beginDayParam = 1;
  } else if (day_num === saturday) {
    beginDayParam = 2;
  } else {
    // それ以外は曜日の分だけ日付を戻す
    beginDayParam = -day_num + 1;
  }

  beginDate.setDate(beginDate.getDate() + beginDayParam); // その週の月曜日取得
  const endDate = new Date(beginDate);
  endDate.setDate(endDate.getDate() + 4); // その週の金曜日取得

  // 欲しい期間の日付のDate配列を生成
  while (1) {
    const pushDate = new Date(beginDate);
    targetDates.push(pushDate);
    if (beginDate.getDate() === endDate.getDate()) break;
    beginDate.setDate(beginDate.getDate() + 1);
  }

  targetDates[targetDates.length - 1].setHours(23);
  targetDates[targetDates.length - 1].setMinutes(59);
  targetDates[targetDates.length - 1].setSeconds(59);

  return targetDates;
}
