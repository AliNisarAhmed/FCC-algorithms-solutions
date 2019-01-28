import isUnique from './isUnique';

test('passing', () => {
  expect(isUnique('abcdef')).toBe(true)
})

test('passing', () => {
  expect(isUnique('abcdef111')).toBe(false)
})