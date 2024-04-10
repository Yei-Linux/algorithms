const $ = (selector) => document.querySelector(selector);

const words = [
  'Umbrella',
  'Dragon',
  'Pineapple',
  'Galaxy',
  'Bicycle',
  'Waterfall',
  'Octopus',
  'Bamboo',
  'Firefly',
  'Notebook',
  'Tornado',
  'Rainbow',
  'Avalanche',
  'Telescope',
  'Moonshine',
  'Treasure',
  'Lighthouse',
  'Avalanche',
  'Carnival',
  'Espresso',
];

const wordTemplate = (word, wordIndex) => {
  return `
    <div class="word">
        ${word
          .split('')
          .map(
            (letter, index) =>
              `<letter class="letter ${
                index === 0 && wordIndex === 0 ? 'active' : ''
              }">${letter}</letter>`
          )
          .join('')}
    </div>
    `;
};

const createWords = (words) => {
  const htmlStringWords = words
    .map((word, wordIndex) => {
      const htmlStringWord = wordTemplate(word, wordIndex);
      return htmlStringWord;
    })
    .join('');
  return htmlStringWords;
};

const setupBoard = () => {
  const board = $('#typying__board');
  const htmlWords = createWords(words);

  board.innerHTML = htmlWords;
};

const handleMoveListener = () => {
  document.addEventListener('keydown', (e) => {
    const keyValue = e.key;

    const letter = document.querySelectorAll('letter');
    const letterArray = [...letter];
    const size = letterArray.length;

    if (
      ['CapsLock', 'Enter', 'Tab', 'ArrowRight', 'ArrowLeft'].includes(keyValue)
    ) {
      return;
    }

    for (let i = 0; i < size; i++) {
      const prev = letterArray[i - 1];
      const next = letterArray[i + 1];
      const letter = letterArray[i];

      const classList = [...letter.classList];
      if (!classList.includes('active')) continue;

      if (keyValue === ' ') {
        break;
      }

      letter.classList.remove('active');
      if (keyValue === 'Backspace' && prev) {
        prev.classList.remove('correct');
        prev.classList.remove('incorrect');
        prev.classList.add('active');
        break;
      }

      if (next) {
        const isSameWordTyped = letter.innerHTML === keyValue;
        letter.classList.add(isSameWordTyped ? 'correct' : 'incorrect');
        next.classList.add('active');
      }
      break;
    }
  });
};

setupBoard();
handleMoveListener();
