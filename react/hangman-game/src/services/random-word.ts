export const fetchRandomWordsService = async () => {
  try {
    const promise = await fetch('https://random-word-api.herokuapp.com/word');
    const [json] = await promise.json();
    return json;
  } catch (error) {
    throw new Error('Error getting random word');
  }
};
