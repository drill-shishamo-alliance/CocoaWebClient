export type JuniorFeeling = {
  junior: string;
  weekFeelings?: {
    morning?: string;
    evening?: string;
  }[];
};

export type JuniorFeelingsState = JuniorFeeling[];
