export enum tabName {
  week = 'week',
  month = 'month',
}

export type displayDateState = {
  displaySpan: Date[]; // 現在表示されている期間の日付を配列として持つ YYYYMMDDを7個もつ配列になる
  displayMonday: Date; // 今週の月曜日の日付
  weekIndex: number; // 今何周目が表示されているか
  displayTab: tabName; // 現在選択されているタブ
};
