// 社員が入力した気分情報を表す型
type ListMoodOfEmployee = {
  [date: string]: {
    [employeeId: string]: {
      inputedMood: string;
    };
  };
};

export default ListMoodOfEmployee;
