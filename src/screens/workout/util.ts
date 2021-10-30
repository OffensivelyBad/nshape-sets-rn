export const getRemainingSetsDescription = (currentSet: number, sets: number): string => {
  const remainingSets = currentSet === sets - 1 ? "Last Set" : `${sets - currentSet}`;
  return remainingSets;
};

export const getNextSetDescription = (currentSet: number, sets: number): string => {
  const nextSet = currentSet === sets - 1 ? "Last Set" : `${currentSet + 1} of ${sets}`;
  return nextSet;
};

export const getElapsedTime = (timeInSeconds: number): string => {
  const minutes = timeInSeconds / 60 % 60;
  const seconds = timeInSeconds % 60;
  const time = `${minutes}:${seconds}`;
  return time;
};
