// 選択された気分の情報を管理する型
export type PunchedMood = {
  id: string; // どの気分かを表すid
  punched_at: Date; // その気分が打刻された時間
};

// 社員が入力した気分情報を表す型
type MoodOfEmployee = {
  subordinate_id: string;
  moods: PunchedMood[];
};

type listMoodOfEmployee = {
  [employee_id: string]: MoodOfEmployee;
};

export default listMoodOfEmployee;
