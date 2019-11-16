// 1人の社員情報を表す型
export type employee = {
  id: string;
  name: string;
};

// 社員の情報を表す型
type EmployeesState = {
  [userId: string]: employee;
};

export default EmployeesState;
