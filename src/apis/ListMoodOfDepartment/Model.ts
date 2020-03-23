type CauseRatio = {
  [cause_id: number]: {
    id: number;
    ratio: number;
  };
};

type MoodsRatio = {
  [mood_id: number]: {
    id: number;
    ratio: number;
    causes_ratio: CauseRatio;
  };
};

type ListMoodOfDepartment = {
  [department_id: number]: {
    id: number;
    moods_ratio: MoodsRatio;
  };
};

export default ListMoodOfDepartment;
