import EmployeeMoods from 'src/apis/EmployeeMoodsApi/EmployeeMoodsTableResponse/EmployeeMoods';

type EmployeeMoodsState = {
  employees: EmployeeMoods[];
  details: {
    selectEmployee?: EmployeeMoods;
  };
};

type ReadonlyEmployeeMoodsState = Readonly<EmployeeMoodsState>;
export default ReadonlyEmployeeMoodsState;
