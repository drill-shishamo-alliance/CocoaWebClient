import MoodsState from './Moods';

export const MockMoods: MoodsState = {
  '1': {
    id: '1',
    department_id: 1,
    name: 'もうダメ、助けて...',
    weight: 1,
    icon_name: 'sentiment_very_dissatisfied',
    color: '#7E8B8C',
  },
  '2': {
    id: '2',
    department_id: 1,
    name: 'つらい...',
    weight: 2,
    icon_name: 'sentiment_dissatisfied',
    color: '#2880BA',
  },
  '3': {
    id: '3',
    department_id: 1,
    name: '平常運転',
    weight: 3,
    icon_name: 'sentiment_satisfied',
    color: '#E57D22',
  },
  '4': {
    id: '4',
    department_id: 1,
    name: 'いい感じ',
    weight: 4,
    icon_name: 'sentiment_satisfied',
    color: '#1ABC9C',
  },
  '5': {
    id: '5',
    department_id: 1,
    name: '絶好調！',
    weight: 5,
    icon_name: 'sentiment_very_satisfied',
    color: '#EF7079',
  },
  '6': {
    id: '6',
    department_id: 1,
    name: '未入力',
    weight: 0,
    icon_name: 'clear',
    color: 'red',
  },
};
