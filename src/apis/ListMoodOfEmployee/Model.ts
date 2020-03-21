type PunchLog = {
  mood_id: number;
  cause_ids: number[];
  punched_at: number;
};

type MoodOfEmployee = {
  employee_id: number;
  punch_logs: PunchLog[];
};

export default MoodOfEmployee;
