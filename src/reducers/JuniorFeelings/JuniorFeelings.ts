import { JuniorFeelingsState } from 'src/states/JuniorFeelingsState';
import JuniorFeelingsAction from 'src/actions/JuniorFeelings/JuniorFeelingsAction';
import JuniorFeelingsActionType from 'src/actions/JuniorFeelings/JuniorFeelingsActionType';

const initialState: JuniorFeelingsState = [
  {
    junior: '髙橋 佑太',
    weekFeelings: [
      {
        morning: 'sentiment_satisfied_alt',
        evening: 'sentiment_satisfied_alt',
      },
      {
        morning: 'sentiment_satisfied_alt',
        evening: 'sentiment_satisfied_alt',
      },
      {
        morning: 'sentiment_satisfied_alt',
        evening: 'sentiment_satisfied_alt',
      },
      {
        morning: 'sentiment_satisfied_alt',
        evening: 'sentiment_satisfied_alt',
      },
      {
        morning: 'sentiment_satisfied_alt',
        evening: 'sentiment_satisfied_alt',
      },
    ],
  },
];

const juniorFeelings = (
  state: JuniorFeelingsState = initialState,
  action: JuniorFeelingsAction
): JuniorFeelingsState => {
  switch (action.type) {
    case JuniorFeelingsActionType.GET_JUNIOR_FEELINGS_SUCCEEDED:
      return {
        ...action.payload,
      };
    default:
      return state;
  }
};

export default juniorFeelings;
