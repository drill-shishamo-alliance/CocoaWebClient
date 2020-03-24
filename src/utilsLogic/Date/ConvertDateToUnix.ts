export function convertDateToUnix(date: Date): number {
  const unix = Math.round(date.getTime() / 1000);
  return unix;
}

export function convertDateToUnixForBegin(date: Date): number {
  const unix = Math.round(date.getTime() / 1000 - 5);
  return unix;
}

export function convertDateToUnixForEnd(date: Date): number {
  const unix = Math.round(date.getTime() / 1000 + 5);
  return unix;
}
