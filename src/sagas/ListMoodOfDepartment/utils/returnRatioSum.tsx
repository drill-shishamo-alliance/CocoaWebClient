import { MoodsRatio } from 'src/states/ListMoodOfDepartment/ListMoodOfDepartment';

export const returnRatioSum = (moods_ratio: MoodsRatio): number => {
  let ratio_sum = 0;
  Object.entries(moods_ratio).map(([key, value]) => {
    switch (value.id) {
      case 'mood_id1':
        ratio_sum += moods_ratio[value.id].ratio * 1;
        break;
      case 'mood_id2':
        ratio_sum += moods_ratio[value.id].ratio * 2;
        break;
      case 'mood_id3':
        ratio_sum += moods_ratio[value.id].ratio * 3;
        break;
      case 'mood_id4':
        ratio_sum += moods_ratio[value.id].ratio * 4;
        break;
      case 'mood_id5':
        ratio_sum += moods_ratio[value.id].ratio * 5;
        break;
    }
  });
  return ratio_sum;
};
