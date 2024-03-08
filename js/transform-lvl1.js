/**
 * exe: https://github.com/goncy/interview-challenges/tree/main/ejercicios-algoritmos/sesion-1/transformador
 * func({ nombres: ["Bruno", "Andrea"], edades: [20, 19] });
 * [
 * { id: "1", nombre: "Bruno", edad: 20 },
 * { id: "2", nombre: "Andrea", edad: 19 },
 * ];
 *
 *  [ ['nombres', ["Bruno", "Andrea"]] , ['edades', [20, 19] ] ]
 *
 * First generate Entries
 * Then reduce creating an acc where: [{nombre: "Bruno"},{nombre: "Andrea"}]
 * Then iterate the second field where: [{nombre: "Bruno",edad: 20},{nombre: "Andrea", edad: 19}]
 */

const plurlToSingular = (word) => {
  const newWord = word.replace(/es/g, '');
  return newWord.slice(-1) === 'r' ? word.replace(/s/g, '') : newWord;
};

function transform(input) {
  return Object.entries(input).reduce((acc, [key, values]) => {
    const newKey = plurlToSingular(key);
    const accUpdated = !acc.length
      ? values.map((item, i) => ({
          id: (i + 1).toString(),
          [newKey]: item,
        }))
      : acc.map((item, i) => ({
          ...item,
          [newKey]: values[i],
        }));
    return accUpdated;
  }, []);
}

module.exports = { transform };
