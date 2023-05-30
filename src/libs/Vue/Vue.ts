import { createApp } from 'vue';
// import VueUniversalModal from 'vue-universal-modal';
import { store, storeKey } from '@/store';
import { IVue, IComponents, IComponent } from './IVue';

interface IParams {
  [name: string]: number | string | IParams | boolean;
}

class Vue implements IVue {
  components: IComponents;

  constructor() {
    this.components = {};
  }

  setComponent(component: IComponent) {
    const name = // eslint-disable-next-line no-underscore-dangle
      component?.__name ||
      component?.name || // eslint-disable-next-line no-underscore-dangle
      component?.__file?.split('.')?.[0]?.match(/\w*$/)?.[0];
    if (name) {
      this.components[name] = component;
    }
  }

  createPropsFromAttributes(data: HTMLDivElement): IParams {
    try {
      const { dataset } = data;

      const params: IParams = {};
      // eslint-disable-next-line no-restricted-syntax
      for (const key in dataset) {
        // eslint-disable-next-line no-continue
        if (key === 'vue') continue;
        // console.log(key);
        params[key] = JSON.parse(dataset[key] as string);
      }

      return params;
      // return {};
    } catch (err) {
      console.error(err);
      return {};
    }
  }

  main() {
    try {
      const domComponents: Array<HTMLDivElement> = Array.from(
        document.querySelectorAll('[data-vue]')
      );

      domComponents.forEach((el) => {
        const name = el.dataset.vue;
        if (name && name in this.components) {
          const app = createApp(this.components[name], this.createPropsFromAttributes(el));
          app.use(store, storeKey);

          // app.use(VueUniversalModal, {
          //   teleportTarget: '#modals',
          // });

          app.mount(el);
        }
      });
    } catch (err) {
      console.error(err);
    }
  }
}

export default new Vue();
