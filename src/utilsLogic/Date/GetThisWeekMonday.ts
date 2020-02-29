// 日付を渡すと、その週の月曜日を返す関数
export default function getThisWeekMonday(date: Date): Date {
  const sunday = 0;
  let targetDate = new Date(date);
  if (targetDate.getDay() === sunday) {
    const previousDate = 6;
    targetDate = new Date(targetDate.setDate(targetDate.getDate() - previousDate));
  } else {
    const previousDate = targetDate.getDay() - 1;
    targetDate = new Date(targetDate.setDate(targetDate.getDate() - previousDate));
  }
  return targetDate;
}
