type CauseRatio = {
  [cause_id: string]: {
    id: string;
    ratio: number;
  };
};

type MoodsRatio = {
  [mood_id: string]: {
    id: string;
    ratio: number;
    causes_ratio: CauseRatio;
  };
};

type ListMoodOfDepartment = {
  [department_id: string]: {
    id: string;
    moods_ratio: MoodsRatio;
  };
};

export default ListMoodOfDepartment;
