// eslint-disable-next-line strict
'use strict';

const repeatedWord = require('../repeated-word.js');

describe(' Repeated Word' , () => {
  it('it Should return (a) because it repeated' , () => {
    let testString = 'Once upon a time, there was a brave princess who...';
    // repeatedWord(testString);
    expect(repeatedWord(testString)).toBe('a');
  });
  it('it should return (it) ether there is upper-case or lower-case ' , () => {

    let testString = 'It was the best of times, it was the worst of times, it was the age of wisdom, it was the age of foolishness, it was the epoch of belief, it was the epoch of incredulity, it was the season of Light, it was the season of Darkness, it was the spring of hope, it was the winter of despair, we had everything before us, we had nothing before us, we were all going direct to Heaven, we were all going direct the other way – in short, the period was so far like the present period, that some of its noisiest authorities insisted on its being received, for good or for evil, in the superlative degree of comparison only...';
    expect(repeatedWord(testString)).toBe('it');
  });
  it('it should return the first repeated in the string' , () => {
    let testString = 'It summer a queer, sultry summer , the was they electrocuted the Rosenbergs, and I didn’t know what I was doing in New York..';
    expect(repeatedWord(testString)).toBe('summer');
  });
});