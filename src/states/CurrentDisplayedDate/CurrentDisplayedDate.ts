export type CurrentDisplayedDateState = {
  displayedWeeks: string[]; // 現在表示されている週の日付を配列として持つ YYYYMMDDを7個もつ配列になる
  displayedMonths: string[]; // 現在表示されている月の日付を配列として持つ YYYYMMDDを30個くらいもつ配列になる
  month: number;
  year: number;
};
