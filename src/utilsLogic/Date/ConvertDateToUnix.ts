export default function convertDateToUnix(date: Date): number {
  const unix = Math.round(date.getTime() / 1000);
  return unix;
}
