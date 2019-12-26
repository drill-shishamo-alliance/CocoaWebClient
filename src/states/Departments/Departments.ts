export type Department = {
  id: string;
  name: string;
};

//  部署の情報を表す型
type DepartmentsState = {
  [departmentId: string]: Department;
};

export default DepartmentsState;
