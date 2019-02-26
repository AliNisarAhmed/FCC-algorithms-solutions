import { LinkedList, Node } from './linkedList';

describe('Testing add to LinkedList', () => {

  test('It adds the new Node as head when the list if empty', () => {
    let elem = 4;
    let node = new Node(elem);
    let list = new LinkedList();
    list.add(elem);
    expect(list.head()).toEqual(node);
    expect(list.size()).toBe(1);
  });

  test('It adds a new Node a the end of a non-empty list', () => {
    let elem1 = 4;
    let elem2 = 5;
    let node1 = new Node(elem1);
    let node2 = new Node(elem2);
    let list = new LinkedList();
    list.add(elem1);
    console.log(list);
    list.add(elem2);
    expect(list.head().elem).toEqual(node1.elem);
    expect(list.head()).toEqual({elem: 4, next: { elem: 5, next: null}});
    expect(list.head().next).toEqual(node2);
    expect(list.size()).toBe(2);
  });
})