type CauseRatio = {
  [cause_id: number]: {
    id: number;
    ratio: number;
  };
};

export type MoodsRatio = {
  [mood_id: number]: {
    id: number;
    ratio: number;
    causes_ratio: CauseRatio;
  };
};

type ListMoodOfDepartment = {
  [department_id: string]: {
    id: number;
    moods_ratio: MoodsRatio;
  };
};

export default ListMoodOfDepartment;
