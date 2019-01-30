import PriorityQueue from './priorityQueue_class';

describe('Testing PriorityQueue', () => {

  test('Enqueue item to the queue with priority', () => {
    let pQueue = new PriorityQueue();
    let item1 = ['ali', 4];
    let item2 = ['sam', 2];
    let item3 = ['danny', 1];
    let item4 = ['fahad', 1];
    let item5 = ['usman', 2];
    pQueue.enqueue(item1).enqueue(item2).enqueue(item3);
    expect(pQueue.size()).toBe(3);
    expect(pQueue.collection).toEqual([item3, item2, item1]);
    pQueue.enqueue(item4).enqueue(item5);
    expect(pQueue.collection).toEqual([item3, item4, item2, item5, item1])
  });

  test('Dequeue item based on priority', () => {
    let pQueue = new PriorityQueue();
    let item1 = ['ali', 4];
    let item2 = ['sam', 2];
    let item3 = ['danny', 1];
    let item4 = ['fahad', 1];
    let item5 = ['usman', 2];
    pQueue.enqueue(item1).enqueue(item2).enqueue(item3).enqueue(item4).enqueue(item5);
    let first = pQueue.dequeue();
    expect(first).toEqual(item3[0]);
    expect(pQueue.collection).toEqual([item4, item2, item5, item1]);
    expect(pQueue.collection.length).toBe(4);
    let second = pQueue.dequeue();
    expect(second).toEqual(item4[0]);
    expect(pQueue.collection).toEqual([item2, item5, item1]);
  });

  test('dequeue on FIFO if two or more elements have same priority', () => {
    let pQueue = new PriorityQueue();
    let item1 = ['ali', 2];
    let item2 = ['sam', 1];
    let item3 = ['danny', 1];
    let item4 = ['usman', 2];
    let item5 = ['sam', 3];
    pQueue.enqueue(item1).enqueue(item3).enqueue(item2).enqueue(item4).enqueue(item5);
    let first = pQueue.dequeue();
    expect(first).toEqual(item3[0]);
    expect(pQueue.collection).toEqual([item2, item1, item4, item5]);
    let second = pQueue.dequeue();
    expect(second).toEqual(item2[0]);
    expect(pQueue.collection).toEqual([item1, item4, item5]);
    let third = pQueue.dequeue();
    expect(third).toEqual(item1[0]);
    expect(pQueue.collection).toEqual([item4, item5]);
  })
})
