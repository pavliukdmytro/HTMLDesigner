import { IStore } from '@/libs/Store/IStore';
import { IVue } from './Vue/IVue';

export interface IApp {
  vue: IVue;

  store: IStore;
}
