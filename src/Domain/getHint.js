function getHint(computer, user) {
  const [cntStrike, cntBall] = user.reduce(
    ([strike, ball], number) => {
      const index = computer.indexOf(number);
      if (index === -1) {
        return [strike, ball];
      }
      return computer[index] === user[index]
        ? [strike + 1, ball]
        : [strike, ball + 1];
    },
    [0, 0],
  );
  return [cntStrike, cntBall];
}

export default getHint;
