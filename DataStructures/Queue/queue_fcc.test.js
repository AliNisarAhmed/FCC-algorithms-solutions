import Queue from './queue_fcc';

test('correctly enqueues and dequeues the elements', () => {
  let queue = new Queue();
  queue.enqueue('Smith');
  queue.enqueue('Danny');
  let d = queue.dequeue();
  expect(d).toBe('Smith')
})