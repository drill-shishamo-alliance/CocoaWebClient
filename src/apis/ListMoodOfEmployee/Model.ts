type PunchLogModel = {
  employee_id: number;
  mood_id: string;
  cause_ids: number[];
  punched_at: number;
};

export default PunchLogModel;
