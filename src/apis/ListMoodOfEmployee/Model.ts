type PunchLog = {
  mood_id: string;
  cause_ids: string[];
  punched_at: number;
};

type MoodOfEmployee = {
  employee_id: string;
  punch_logs: PunchLog[];
};

export default MoodOfEmployee;
