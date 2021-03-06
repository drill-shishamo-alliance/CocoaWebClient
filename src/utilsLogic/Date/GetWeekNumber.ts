// 日付を渡すと、その日付がその月の第何週目に当たるかを返してくれる関数
export default function getWeekIndex(date: Date): number {
  const week = 7; // 1週間は7日
  const sunday = date.getDate() - date.getDay();
  const nextSaturday = sunday + 6;
  const targetDay = nextSaturday + 5;
  const weekIndex = Math.floor(targetDay / week);
  return weekIndex;
}
