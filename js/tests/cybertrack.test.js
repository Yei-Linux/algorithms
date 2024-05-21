const { cyberReindeer } = require('../cybertruck');
const { assert } = require('./helper');

describe('CyberTrack Test', () => {
  it('First case', () => {
    assert.deepEqual(cyberReindeer('S.|.', 4), [
      'S.|.',
      '.S|.',
      '.S|.',
      '.S|.',
    ]);
    assert.deepEqual(cyberReindeer('S..|...|..', 10), [
      'S..|...|..', // estado inicial
      '.S.|...|..', // avanza el trineo la carretera
      '..S|...|..', // avanza el trineo la carretera
      '..S|...|..', // el trineo para en la barrera
      '..S|...|..', // el trineo para en la barrera
      '...S...*..', // se abre la barrera, el trineo avanza
      '...*S..*..', // avanza el trineo la carretera
      '...*.S.*..', // avanza el trineo la carretera
      '...*..S*..', // avanza el trineo la carretera
      '...*...S..', // avanza por la barrera abierta
    ]);
  });
});
