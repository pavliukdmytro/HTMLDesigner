import { store } from '../../store';
import { IStore } from './IStore';

class Store implements IStore {
  /* eslint-disable @typescript-eslint/no-explicit-any */
  commit(name: string, payload?: any) {
    store.commit(name, payload);
  }
}

export default new Store();
