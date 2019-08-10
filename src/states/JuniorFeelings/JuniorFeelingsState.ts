import JuniorFeelings from 'src/apis/JuniorFeelingsApi/JuniorFeelingsTableResponse/JuniorFeelings';

type JuniorFeelingsState = {
  juniors: JuniorFeelings[];
  details: {
    selectJunior?: JuniorFeelings;
  };
};

type ReadonlyJuniorFeelingsState = Readonly<JuniorFeelingsState>;
export default ReadonlyJuniorFeelingsState;
