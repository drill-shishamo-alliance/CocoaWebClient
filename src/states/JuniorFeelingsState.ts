export interface JuniorFeelingsModel {
  juniors: {
    id: number;
    name: string;
    is_dangerous: boolean;
    icon_path: string;
    feelings: {
      date: string;
      is_attendance: boolean;
      icon_path: string;
    }[];
  }[];
  error_message: string;
}

export interface JuniorFeeling {
  junior: string;
  weekFeelings?: {
    morning?: string;
    evening?: string;
  }[];
}
