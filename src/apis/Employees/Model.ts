// 社員の情報を表す型
type Employees = {
  [userId: string]: {
    id: string; // 社員さんの一意のid。社員keyのuserIdと同じ値
    name: string; // 社員さんの名前
  };
};

export default Employees;
