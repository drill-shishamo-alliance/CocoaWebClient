export default function convertUnixToDate(unix: number): Date {
  const date = new Date(unix * 1000);
  return date;
}
