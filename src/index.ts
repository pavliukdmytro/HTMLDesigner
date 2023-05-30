import './vue-shim.d.ts';
import './scss/main.scss';

import { IApp } from './libs/IApp';
import App from './libs/App';
import './root-components';

declare global {
  interface Window {
    App: IApp;
  }
}

window.App = App;
App.vue.main();
