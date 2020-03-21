export type Mood = {
  name: string;
  count: number;
};

export type Moods = {
  verySatisfied: Mood;
  satisfied: Mood;
  face: Mood;
  dissatisfied: Mood;
  veryDissatisfied: Mood;
  bad: Mood;
};

export type WeeklyMoods = {
  [weekNumberOrMonth: string]: Moods;
};

export type WeeklyMoodsByMonthState = {
  [year: string]: {
    [month: string]: {
      [employeeId: number]: WeeklyMoods;
    };
  };
};
