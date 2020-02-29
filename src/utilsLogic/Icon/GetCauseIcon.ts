import AmountOfWorkIcon from 'src/assets/CauseIcon/amountOfWorkIcon.svg';
import HumanRelationshipIcon from 'src/assets/CauseIcon/humanRelationshipIcon.svg';
import JobDescriptionIcon from 'src/assets/CauseIcon/jobDescriptionIcon.svg';

type IconMap = {
  [key: string]: {
    icon_path: string;
    src: string;
  };
};
export const iconMap: IconMap = {
  仕事量: {
    icon_path: '',
    src: AmountOfWorkIcon,
  },
  仕事内容: {
    icon_path: '',
    src: JobDescriptionIcon,
  },
  人間関係: {
    icon_path: '',
    src: HumanRelationshipIcon,
  },
  評価: {
    icon_path: 'thumbs_up_down',
    src: '',
  },
} as const;
