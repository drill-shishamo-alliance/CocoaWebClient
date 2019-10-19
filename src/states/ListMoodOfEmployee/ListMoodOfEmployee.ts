// 社員が入力した気分情報を表す型
type ListMoodOfEmployeeState = {
  [date: string]: {
    [employeeId: string]: {
      inputedMood: string;
    };
  };
};

export default ListMoodOfEmployeeState;
