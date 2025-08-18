import { makeAutoObservable } from "mobx";
import { ILocalStore } from "./createContextLocalStore";

export class CounterStore implements ILocalStore {
  count = 0;

  constructor() {
    makeAutoObservable(this);
  }

  increment = () => {
    this.count += 1;
  };

  decrement = () => {
    this.count -= 1;
  };

  add = (n: number) => {
    this.count += n;
  };

  reset = () => {
    this.count = 0;
  };

  destroy() {
    // do nothing
  };
}
