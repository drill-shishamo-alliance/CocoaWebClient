// 日付を渡すと、その月の日付をDate配列として返してくれる関数
export default function getMonthDates(date: Date): Date[] {
  const beginDate = new Date(date.getFullYear(), date.getMonth(), 1); // その月の初日
  const endDate = new Date(date.getFullYear(), date.getMonth() + 1, 0); // その月の終日
  let targetDates: Date[] = [];

  // 欲しい期間の日付のDate配列を生成
  while (1) {
    const pushDate = new Date(beginDate);
    targetDates.push(pushDate);
    if (beginDate.getDate() === endDate.getDate()) break;
    beginDate.setDate(beginDate.getDate() + 1);
  }

  return targetDates;
}
