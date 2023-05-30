import { InjectionKey } from 'vue';
import { createStore, useStore as baseUseStore, Store } from 'vuex';

import { IState } from '@/store/IState';

const debug = process.env.NODE_ENV !== 'production';

// eslint-disable-next-line symbol-description
export const storeKey: InjectionKey<Store<IState>> = Symbol();

// Create a new index instance.
export const store = createStore<IState>({
  state() {
    return {
      // counter: 0,
    };
  },
  modules: {
    global: require('./modules/global/global').default,
  },
  mutations: {},
  strict: debug,
});

export function useStore() {
  return baseUseStore(storeKey);
}
