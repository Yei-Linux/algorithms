/**
 * https://www.codewars.com/kata/5286d92ec6b5a9045c000087/train/javascript
 * Input: user.name.firstname=Bob&user.name.lastname=Smith&user.favoritecolor=Light%20Blue
 * Output:
 *  {
 *    'user': {
 *      'name': {
 *        'firstname': 'Bob',
 *        'lastname': 'Smith'
 *      },
 *      'favoritecolor': 'Light Blue'
 *    }
 *  }
 */
function convertQueryToMap(query) {
  let myObject = {};
  const url = new URLSearchParams(query);

  for (let item of url) {
    const [key, value] = item;
    nestedQuery(key, myObject, value);
  }

  return myObject;
}

function nestedQuery(keyNested, object, valueToSet) {
  if (keyNested.includes('.')) {
    const queryItems = [...keyNested.split('.')];
    const key = queryItems.shift();
    if (!object[key]) {
      object[key] = {};
    }
    return nestedQuery(queryItems.join('.'), object[key], valueToSet);
  }

  object[keyNested] = valueToSet;
  return;
}

module.exports = { convertQueryToMap };
