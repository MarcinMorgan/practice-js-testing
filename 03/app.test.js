import randomNumber from './app';

test(`check if number`, () => {
    expect(typeof(randomNumber(1,1))).toBe('number');
})