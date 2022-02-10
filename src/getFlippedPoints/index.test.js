const getFlippedPoints = require('./index');

const testCases = [
  {
    input: [
      { x: -10, y: 0 },
      { x: 2, y: 20 },
      { x: 4, y: 0 },
      { x: 30, y: -8 },
      { x: 0, y: -30 },
    ],
    expected: [
      { x: 30, y: 0 },
      { x: 18, y: 20 },
      { x: 16, y: 0 },
      { x: -10, y: -8 },
      { x: 20, y: -30 },
    ],
  },
  {
    input: [
      { x: 0, y: 0 },
      { x: 0, y: 81 },
      { x: 4, y: 40 },
      { x: 5, y: 40 },
    ],
    expected: [
      { x: 5, y: 0 },
      { x: 5, y: 81 },
      { x: 1, y: 40 },
      { x: 0, y: 40 },
    ],
  },
  {
    input: [
      { x: -500, y: -1000 },
      { x: -250, y: -300 },
      { x: -1, y: -1 },
    ],
    expected: [
      { x: -1, y: -1000 },
      { x: -251, y: -300 },
      { x: -500, y: -1 },
    ],
  },
  {
    input: [
      { x: 2020, y: 50 },
      { x: -5175, y: -80 },
      { x: 34, y: 60 },
      { x: 721, y: 60 },
    ],
    expected: [
      { x: -5175, y: 50 },
      { x: 2020, y: -80 },
      { x: -3189, y: 60 },
      { x: -3876, y: 60 },
    ],
  },
];

test.each(testCases)('getFlippedPoints case $#', ({ input, expected }) => {
  const actual = getFlippedPoints(input);
  expect(actual).toEqual(expect.arrayContaining(expected));
  expect(actual.length).toEqual(expected.length);
});
