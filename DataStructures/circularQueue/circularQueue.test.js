import CircularQueue from './circularQueue';

describe('Testing the circular queue', () => {
  test('enqueue adds item to the circular queue', () => {
    let cq = new CircularQueue(3);
    cq.enqueue(17).enqueue(32).enqueue(591);
    let result = cq.print();
    expect(result[0]) === 17;
    expect(result[1]) === 32;
    expect(result[2]) === 591;
    expect(cq.isFull).toBeTruthy();
  });

  test('cannot enqueue items past the read pointer', () => {
    let cq = new CircularQueue(3);
    cq.enqueue(17).enqueue(32).enqueue(591).enqueue(13).enqueue(25).enqueue(59);
    let result = cq.print();
    expect(result[0]) === 17;
    expect(result[1]) === 32;
    expect(result[2]) === 591;
    expect(result[3]) === undefined;
    expect(result[4]) === undefined;
    expect(result[5]) === undefined;
  });

  test('dequeue method removes items from the list', () => {
    let result;
    let cq = new CircularQueue(3);
    cq.enqueue(17).enqueue(32).enqueue(591).enqueue(590);
    result = cq.dequeue()
    expect(result).toBe(17)
    result = cq.dequeue()
    expect(result).toBe(32)
    result = cq.dequeue()
    expect(result).toBe(591);
    result = cq.dequeue();
    expect(result).toBeNull();
    expect(cq.isFull).toBeFalsy();
    expect(cq.write).toEqual(cq.read);
  })
});



// tests:
//   - text: The <code>enqueue</code> method adds items to the circular queue.
//     testString: assert((function(){ var test = new CircularQueue(3); test.enqueue(17); test.enqueue(32); test.enqueue(591); var print = test.print(); return print[0] === 17 && print[1] === 32 && print[2] === 591; })(), 'The <code>enqueue</code> method adds items to the circular queue.');
//   - text: You cannot enqueue items past the read pointer.
//     testString: assert((function(){ var test = new CircularQueue(3); test.enqueue(17); test.enqueue(32); test.enqueue(591); test.enqueue(13); test.enqueue(25); test.enqueue(59); var print = test.print(); return print[0] === 17 && print[1] === 32 && print[2] === 591; })(), 'You cannot enqueue items past the read pointer.');

//   - text: The <code>dequeue</code> method dequeues items from the queue.
//     testString: assert((function(){ var test = new CircularQueue(3); test.enqueue(17); test.enqueue(32); test.enqueue(591); return test.dequeue() === 17 && test.dequeue() === 32 && test.dequeue() === 591; })(), 'The <code>dequeue</code> method dequeues items from the queue.');

//   - text: After an item is dequeued its position in the queue should be reset to <code>null</code>.
//     testString: assert((function(){ var test = new CircularQueue(3); test.enqueue(17); test.enqueue(32); test.enqueue(672); test.dequeue(); test.dequeue(); var print = test.print(); return print[0] === null && print[1] === null && print[2] === 672; })(), 'After an item is dequeued its position in the queue should be reset to <code>null</code>.');

//   - text: Trying to dequeue past the write pointer returns <code>null</code> and does not advance the write pointer.
//     testString: assert((function(){ var test = new CircularQueue(3); test.enqueue(17); test.enqueue(32); test.enqueue(591); return test.dequeue() === 17 && test.dequeue() === 32 && test.dequeue() === 591 && test.dequeue() === null && test.dequeue() === null && test.dequeue() === null && test.dequeue() === null && test.enqueue(100) === 100 && test.dequeue() === 100; })(), 'Trying to dequeue past the write pointer returns <code>null</code> and does not advance the write pointer.');