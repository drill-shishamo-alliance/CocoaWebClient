export enum tabName {
  week = 'week',
  month = 'month',
}

export type displayDateState = {
  displaySpan: Date[]; // 現在表示されている期間の日付を配列として持つ YYYYMMDDを7個もつ配列になる
  displayDate: Date; // 現在表示されている年と月の情報を持つ
  weekIndex: number; // 今何周目が表示されているか
  displayTab: tabName; // 現在選択されているタブ
};
