type beginAndEndDate = {
  beginDate: Date;
  endDate: Date;
};

// 日付とその月の初日と終日を返す
export default function getBeginAndEndDateFromMonth(date: Date): beginAndEndDate {
  const beginDate: Date = new Date(date.getFullYear(), date.getMonth(), 1);
  const endDate: Date = new Date(date.getFullYear(), date.getMonth() + 1, 0);
  return { beginDate, endDate };
}
