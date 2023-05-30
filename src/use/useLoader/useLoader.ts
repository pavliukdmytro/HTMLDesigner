import SvgLoader from '@/use/useLoader/svg-loader';

let loader: HTMLDivElement;

export default function useLoader(element?: string | HTMLElement) {
  let parent: HTMLElement;
  switch (typeof element) {
    case 'string':
      parent = document.querySelector(element) as HTMLElement;
      break;
    case 'object':
      parent = element as HTMLElement;
      break;
    default:
      parent = document.querySelector('body') as HTMLBodyElement;
  }

  const start = () => {
    parent.style.position = 'relative';
    if (!loader) {
      loader = document.createElement('div');
      loader.classList.add('global-loader');
      loader.style.cssText = `
                        display: flex;
                        position: absolute;
                        top: 0;
                        bottom: 0;
                        right: 0;
                        left: 0;
                        background-color: rgba(0,0,0, .2);
                        z-index: 10003;
                    `;

      loader.innerHTML = SvgLoader;
    }

    parent.appendChild(loader);
  };

  const stop = () => {
    if (loader) {
      loader.remove();
      parent.style.position = 'static';
    }
  };

  return {
    start,
    stop,
  };
}
