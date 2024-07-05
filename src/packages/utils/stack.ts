import type { MapCallbackfn } from 'types/common';

class Stack<T extends unknown> {
  private items: T[] = [];

  constructor(items?: T[] | null) {
    if (items && items.length) {
      this.items = items;
    }
  }

  getItems(): T[] {
    return [...this.items];
  }

  map(cb: MapCallbackfn<T>) {
    return this.items.map(cb);
  }

  push(element: T): void {
    this.items.push(element);
  }

  pushMultiple(elements: T[]): void {
    this.items.push(...elements);
  }

  pop(): T | undefined {
    if (this.isEmpty()) {
      throw new Error('Stack is empty');
    }
    return this.items.pop();
  }

  peek(): T | undefined {
    if (this.isEmpty()) {
      throw new Error('Stack is empty');
    }
    return this.items[this.items.length - 1];
  }

  isEmpty(): boolean {
    return this.items.length === 0;
  }

  size(): number {
    return this.items.length;
  }

  clear(): void {
    this.items = [];
  }
}

const stack = <T extends unknown>(items?: T[] | null) => new Stack<T>(items);
export default stack;
