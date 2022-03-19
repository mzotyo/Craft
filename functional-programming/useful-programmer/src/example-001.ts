const prepareTea = (): string => "greenTea";

export const getTea = (numOfCups: number): string[] => {
  const teaCups: string[] = [];

  for (let cups = 1; cups <= numOfCups; cups += 1) {
    const teaCup = prepareTea();
    teaCups.push(teaCup);
  }

  return teaCups;
};

const tea4TeamFCC = getTea(2);

console.log(tea4TeamFCC);
