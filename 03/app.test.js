import randomNumber from './app';

it(`expect number`, () => {
    expect(typeof(randomNumber(1,1))).toBe('number');
})

it(`random 1,1 to be 1`, () => {
    expect(randomNumber(1,1)).toBe(1);
});

it(`expect type error `, () => {
    expect(() => { randomNumber('NaN',2) }).toThrow();
});

it(`expect range error`, () => {
    expect(() => { randomNumber(3,2)} ).toThrow();
});

it(`check if number in range`, () => {
    expect(randomNumber(2,4)).toBeGreaterThanOrEqual(2);
    expect(randomNumber(2,4)).toBeLessThanOrEqual(4);
})