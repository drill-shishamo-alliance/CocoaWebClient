import { convertDateToUnixForBegin, convertDateToUnixForEnd } from './ConvertDateToUnix';

type beginAndEndUnix = {
  beginDate: number;
  endDate: number;
};

// 日付を渡すととその月の初日と終日をUnixとして返す
export default function getBeginAndEndDateFromMonth(date: Date): beginAndEndUnix {
  const begin: Date = new Date(date.getFullYear(), date.getMonth(), 1);
  const end: Date = new Date(date.getFullYear(), date.getMonth() + 1, 0);
  end.setHours(23);
  end.setMinutes(59);
  end.setSeconds(59);

  const beginDate: number = convertDateToUnixForBegin(begin);
  const endDate: number = convertDateToUnixForEnd(end);
  return { beginDate, endDate };
}
