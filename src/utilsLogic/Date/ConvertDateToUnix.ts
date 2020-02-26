export default function convertDateToUnix(date: Date): number {
  const unix = Date.parse(date.toString());
  return unix;
}
