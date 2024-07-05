import React from 'react';
import { toast } from 'sonner';
import Stack from 'packages/utils/stack';
import Exception from 'packages/exception';

const useStack = <T extends unknown>(initialItems: T[] = []) => {
  const [stack] = React.useState(Stack<T>());
  const [items, setItems] = React.useState<T[]>(initialItems);

  const initItems = React.useCallback((newItems: T[]) => {
    setItems(newItems);
  }, []);

  const push = React.useCallback(
    (item?: T) => {
      if (item) {
        stack.push(item);
        setItems(stack.getItems());
      }
    },
    [stack]
  );

  const pushMultiple = React.useCallback(
    (newItems?: T[]) => {
      if (newItems) {
        stack.pushMultiple(newItems);
        setItems(stack.getItems());
      }
    },
    [stack]
  );

  const pop = React.useCallback((): T | undefined => {
    try {
      const poppedItem = stack.pop();
      setItems(stack.getItems());
      return poppedItem;
    } catch (e) {
      const messageToast = Exception.catchToast(e, 'Stack:pop');
      toast.error(...messageToast);
      return undefined;
    }
  }, [stack]);

  const peek = React.useCallback((): T | undefined => {
    try {
      return stack.peek();
    } catch (e) {
      const messageToast = Exception.catchToast(e, 'Stack:peek');
      toast.error(...messageToast);
      return undefined;
    }
  }, [stack]);

  const clear = React.useCallback(() => {
    stack.clear();
    setItems(stack.getItems());
  }, [stack]);

  return {
    items,
    initItems,
    push,
    pushMultiple,
    pop,
    peek,
    clear,
  };
};

export default useStack;
