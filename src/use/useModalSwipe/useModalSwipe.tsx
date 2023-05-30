import { DefineComponent, createApp, App, ref } from 'vue';
import { store, storeKey } from '@/store';

import ModalSwipe from '@/use/useModalSwipe/ModalSwipe.vue';

import { IProps, IOptions } from '@/use/useModalSwipe/IModalSwipe';

let app: App | null;
const isShow = ref(true);

document.body.insertAdjacentHTML('beforeend', '<div id="swipe-modals"></div>');
export default function useModalSwipe() {
  const leave = () => {
    app?.unmount();
    app = null;
  };
  const show = (AppComponent: DefineComponent, props?: IProps, options?: IOptions) => {
    if (app) return;
    isShow.value = true;
    app = createApp(
      <ModalSwipe isShow={isShow} leave={leave} {...options}>
        <AppComponent {...props} />
      </ModalSwipe>,
      props
    );

    app.use(store, storeKey);

    app.mount('#swipe-modals');
  };
  const hide = () => {
    if (app === null && !isShow.value) return;
    isShow.value = false;
  };

  return {
    show,
    hide,
  };
}
