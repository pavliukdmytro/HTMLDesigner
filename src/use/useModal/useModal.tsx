import { App, createApp, DefineComponent, ref } from 'vue';
import ModalComponent from '@/use/useModal/ModalComponent.vue';
import VueUniversalModal from 'vue-universal-modal';

let app: App | null;

const { body } = document;

body.insertAdjacentHTML('beforeend', '<div class="modal-component"></div>');
body.insertAdjacentHTML('beforeend', '<div id="modals"></div>');
const isOpen = ref(true);
interface IProps {
  [name: string]: any;
}

interface IOptions {
  width: string;
}
let callBack: (() => void) | undefined;
export default function useModal() {
  const show = (AppComponent: DefineComponent, props?: IProps, options?: IOptions) => {
    isOpen.value = true;
    app = createApp(
      <ModalComponent>
        <AppComponent {...props} />
      </ModalComponent>,
      {
        isOpen,
        options,
        afterLeave: () => {
          app?.unmount();
          callBack?.();
        },
      }
    );
    app.use(VueUniversalModal, {
      teleportTarget: '#modals',
    });

    app.mount('.modal-component');
  };

  const hide = (): Promise<void> => {
    isOpen.value = false;
    return new Promise((resolve) => {
      callBack = resolve;
    });
  };

  return {
    show,
    hide,
  };
}
