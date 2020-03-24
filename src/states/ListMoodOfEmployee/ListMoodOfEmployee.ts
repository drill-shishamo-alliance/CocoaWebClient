// 選択された気分の情報を管理する型
export type PunchLog = {
  mood_id: string; // どの気分かを表すid
  cause_ids: number[];
  punched_at: Date; // その気分が打刻された時間
};

// 社員が入力した気分情報を表す型
type MoodOfEmployee = {
  employee_id: number;
  punch_logs: PunchLog[];
  is_danger: boolean;
};

type listMoodOfEmployeeState = {
  [employee_id: number]: MoodOfEmployee;
};

export default listMoodOfEmployeeState;
