import Set from './set';

describe("testing Set", () => {
  test("adds a unique element and returns true", () => {
    let set = new Set();
    let result = set.add('Hello');
    expect(result).toBeTruthy();
    expect(set.values()).toEqual(['Hello']);
  });

  test("does not add an already existing item and returns false", () => {
    let set = new Set();
    set.add('Hello');
    set.add('World');
    expect(set.values()).toEqual(['Hello', "World"]);
    let result = set.add('Hello');
    expect(result).toBeFalsy();
    expect(set.values()).toEqual(['Hello', "World"]);
  });

  test("removes the element if present in the set", () => {
    let set = new Set();
    set.add('Hello');
    set.add("World");
    let result = set.remove("Hello");
    expect(result).toBeTruthy();
    expect(set.values()).toEqual(['World']);
  });

  test("returns false if the elem to be removed not present in the set", () => {
    let set = new Set();
    let result = set.remove('Hello');
    expect(result).toBeFalsy();
  });

  test("returns the union of two sets, including duplicate values only once", () => {
    let set1 = new Set();
    set1.add("a");
    set1.add("b");
    set1.add("c");
    let set2 = new Set();
    set2.add("a")
    set2.add("b")
    set2.add("d")
    set2.add("e")
    let result = set1.union(set2);
    expect(result.collection).toEqual(["a", "b", "c", "d", "e"]);
  })

  test('performs set intersection correctly', () => {
    let set1 = new Set();
    set1.add(1);
    set1.add(2);
    set1.add(3);
    let set2 = new Set();
    set2.add(2)
    set2.add(3)
    set2.add(4)
    let result = set1.intersection(set2);
    expect(result.collection).toEqual([2, 3]);
  })
})