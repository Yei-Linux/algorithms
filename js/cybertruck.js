function cyberReindeer(road, time) {
  let state = road.replace(/S/g, '.');
  const states = [];
  let wasOpened = false;
  let counter = 0;

  for (let i = 0; i < time && counter < time; i++) {
    if (state[i] === '|' && counter < 5) {
      const stateArray = state.split('');
      stateArray[i - 1] = 'S';
      states.push(stateArray.join(''));
      i--;
      counter++;
      continue;
    }
    if (!wasOpened && counter >= 5) {
      state = state.replace(/\|/g, '*');
      wasOpened = true;
    }

    const stateArray = state.split('');
    stateArray[i] = 'S';
    states.push(stateArray.join(''));
    counter++;
  }

  return states;
}

module.exports = { cyberReindeer };
