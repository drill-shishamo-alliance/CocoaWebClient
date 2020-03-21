export type Department = {
  id: number;
  name: string;
};

//  部署の情報を表す型
type DepartmentsState = {
  [department_id: number]: Department;
};

export default DepartmentsState;
