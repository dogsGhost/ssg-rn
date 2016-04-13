const utils = {
  // Remove whitespace/possible trailing period and make all letters lowercase.
  clean(string) {
    string = string.trim().toLowerCase();
    let lastChar = string.length - 1;
    return string.charAt(lastChar) === '.' ? string.slice(0, lastChar) : string;
  },

  // Capitalize first letter of a string.
  capitalize(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  },

  // Get a random integer between min and max, inclusive.
  random(min = 0, max = 1) {
    if (min >= max) {
      max = min;
      min = 0;
    }
    return Math.floor(Math.random() * (max - min + 1)) + min;
  },

  // Get a random element from a given array.
  sample(array) {
    return array[utils.random(0, array.length - 1)];
  }
};

export default utils;
