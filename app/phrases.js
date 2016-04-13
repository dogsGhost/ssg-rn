import utils from './utils';

const DEFAULT_COUNT = 10;

export const _p = {
  getDeterminer(gender, src) {
    // NOTE: change disables so 100% determiner
    // 1 in 3 chance to add a determiner.
    // if (!utils.random(2)) {
      // Select a random determiner that matches the gender of the noun.
    return utils.sample(src.determiner.filter((i) => gender === i.gender));
    // }
    // return false;
  },

  // Wrapper for utils.sample lets us test word objects specifically.
  getWord(key, src) {
    return utils.sample(src[key]);
  },

  getPhrase(src, lang = 'es') {
    let pronounObj = _p.getWord('pronoun', src);
    let verbObj = _p.getWord('verb', src);
    let nounObj = _p.getWord('noun', src);
    let detObj = _p.getDeterminer(nounObj.gender, src);
    let phraseObj = {
      english:
        `${pronounObj.en} ${verbObj.en} `,
      translation:
        `${pronounObj[lang]} ${verbObj[lang][pronounObj.en]} `
    };

    // Add optional determiner.
    if (detObj) {
      phraseObj.english += `${detObj.en} `;
      phraseObj.translation += `${detObj[lang]} `;
    }

    phraseObj.english += nounObj.en;
    phraseObj.translation += nounObj[lang];

    return phraseObj;
  },

  getPhrases({lang = 'es', count = DEFAULT_COUNT, src}) {
    let answers = [];

    // Populate answers array.
    while (count) {
      answers.push(_p.getPhrase(src, lang));
      count--;
    }

    return answers;
  }
};

export default function (obj = {}) {
  return _p.getPhrases(obj);
}
