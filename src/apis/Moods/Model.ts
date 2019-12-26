// 気分の情報を表す型
type Moods = {
  [mood_id: string]: {
    id: string; // idは気分の英語名。keyのmood_idと同じ値
    name: string; // nameは「絶好調！」などの今の気分を日本語で表したもの
    weight: number;
    icon_name: string;
    color: string;
  };
};

export default Moods;
