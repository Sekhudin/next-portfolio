import type { MapCallbackfn } from 'types/common';

class ArrayUtils<T extends unknown> {
  private value!: T[];

  constructor(value?: T[] | null) {
    if (Array.isArray(value)) {
      this.value = value;
    }
  }

  valueOrNull() {
    if (!this.value) return null;
    return this.value;
  }

  map(cb: MapCallbackfn<T>) {
    if (!this.value) return null;
    return this.value.map(cb);
  }
}

const arrayUtils = <T extends unknown>(value?: T[] | null) => new ArrayUtils(value);
export default arrayUtils;
