import smallestMult from './p5-smallest-multiple';

describe("Testing smallest Multiple", () => {
  test('smallestMult(2) === 1', () => {
    let result = smallestMult(2);
    expect(result).toBe(2);
  });
  test('smallestMult(3) === 6', () => {
    let result = smallestMult(3);
    expect(result).toBe(6);
  });
  test('smallestMult(4) === 12', () => {
    let result = smallestMult(4);
    expect(result).toBe(12);
  });
  test('smallestMult(5) === 60', () => {
    let result = smallestMult(5);
    expect(result).toBe(60);
  });
  test('smallestMult(6) === 60', () => {
    let result = smallestMult(6);
    expect(result).toBe(60);
  });

  test('smallestMult(7) === 420', () => {
    let result = smallestMult(7);
    expect(result).toBe(420);
  });

  test('smallestMult(8) === 840', () => {
    let result = smallestMult(8);
    expect(result).toBe(840);
  });

  test('smallestMult(9) === 2520', () => {
    let result = smallestMult(9);
    expect(result).toBe(2520);
  });

  test('smallestMult(10) === 2520', () => {
    let result = smallestMult(10);
    expect(result).toBe(2520);
  });

  test('smallestMult(11) === 27720', () => {
    let result = smallestMult(11);
    expect(result).toBe(27720);
  });

  test('smallestMult(13) === 360360', () => {
    let result = smallestMult(13);
    expect(result).toBe(360360);
  });
  test('smallestMult(20) === 232792560', () => {
    let result = smallestMult(20);
    expect(result).toBe(232792560);
  });
})