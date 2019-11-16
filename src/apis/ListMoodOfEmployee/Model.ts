// 選択された気分の情報を管理する型
type PanchedMood = {
  id: string; // どの気分かを表すid
  punched_at: Date; // その気分が打刻された時間
};

// 社員が入力した気分情報を表す型
type MoodOfEmployee = {
  subordinate_id: string;
  moods: PanchedMood[];
};

type listMoodOfEmployeeState = {
  [employee_id: string]: MoodOfEmployee;
};

export default listMoodOfEmployeeState;
