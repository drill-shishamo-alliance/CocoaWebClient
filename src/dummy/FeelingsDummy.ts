import FeelingsResponse from 'src/apis/FeelingsApi/FeelingsResponse';

export const FeelingsDummy: FeelingsResponse[] = [
  {
    id: 'id_1',
    name: '最悪',
    weight: 1,
    icon_name: 'sentiment_very_dissatisfied',
    color: '#7E8B8C',
  },
  {
    id: 'id_2',
    name: '悪い',
    weight: 2,
    icon_name: 'sentiment_dissatisfied',
    color: '#2880BA',
  },
  {
    id: 'id_3',
    name: '普通',
    weight: 3,
    icon_name: 'face',
    color: '#E57D22',
  },
  {
    id: 'id_4',
    name: '良い',
    weight: 4,
    icon_name: 'sentiment_satisfied',
    color: '#1ABC9C',
  },
  {
    id: 'id_5',
    name: '最高',
    weight: 5,
    icon_name: 'sentiment_very_satisfied',
    color: '#EF7079',
  },
];
