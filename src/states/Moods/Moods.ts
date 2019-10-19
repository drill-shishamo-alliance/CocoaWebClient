// 気分の情報を表す型
type MoodsState = {
  [moodId: string]: {
    id: string; // idは気分の英語名。keyのmoodIdと同じ値
    name: string; // nameは「絶好調！」などの今の気分を日本語で表したもの
    weight: number;
    icon_name: string;
    color: string;
  };
};

export default MoodsState;
