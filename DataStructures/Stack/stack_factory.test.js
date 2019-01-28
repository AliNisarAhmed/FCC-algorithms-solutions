import Stack from './stack_factory';

describe('Testing Stack Data Structure', () => {
  
  // test('creates a new Stack', () => {
  //   let stack = Object.create(Stack());
  //   expect(stack).to('push');
  // });

  test('Pushes an element in the stack', () => {
    let stack = Object.create(Stack());
    stack.push('ali').push('sam');
    expect(stack.getCollection()).toHaveLength(2);
    expect(stack.peek()).toEqual('sam');
  });

  test('Pops the last element out of stack', () => {
    let stack = Object.create(Stack());
    stack.push('ali').push('sam');
    let removed = stack.pop();
    expect(stack.getCollection().length).toBe(1);
    expect(removed).toBe('sam');
    expect(stack.peek()).toBe('ali');
  });

  test('Peeking shows the last element pushed to the stack', () => {
    let stack = Object.create(Stack());
    stack.push('ali').push('sam');
    expect(stack.peek()).toBe('sam');
  });

  test('Checks correctly for empty and non empty stacks', () => {
    let stack1 = Object.create(Stack());
    let stack2 = Object.create(Stack());
    expect(stack1.isEmpty).toBeTruthy();
    expect(stack2.isEmpty).toBeTruthy();
    stack1.push('ali').pop();
    expect(stack1.isEmpty()).toBeTruthy();
    stack2.push('ali');
    expect(stack2.isEmpty()).toBeFalsy();
  });

  test('.clear() fully empties the stack', () => {
    let stack = Object.create(Stack());
    stack.push('ali').push('sam');
    stack.clear();
    expect(stack.getCollection()).toHaveLength(0);
  });
})