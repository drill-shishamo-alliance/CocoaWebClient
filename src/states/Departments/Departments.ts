export type Department = {
  id: number | string;
  name: string;
};

//  部署の情報を表す型
type DepartmentsState = {
  [department_id: string]: Department;
};

export default DepartmentsState;
