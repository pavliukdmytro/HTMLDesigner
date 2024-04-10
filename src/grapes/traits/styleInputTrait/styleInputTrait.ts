import type { Editor } from 'grapesjs/dist/index';

export default (editor: Editor) => {
  editor.Traits.addType('style-input', {
    // extends: 'style-input',
    extend: 'number',
    // Expects as return a simple HTML string or an HTML element
    createInput({ trait }) {
      const { placeholder, value } = trait.props();

      // Create a new element container and add some content
      const el = document.createElement('div');
      el.innerHTML = `
      <input class="style-input" type="number"  placeholder="${placeholder}" value="${value}">
    `;

      return el;
    },
    onEvent({ event, trait }) {
      // @ts-ignore
      const value = event?.target?.value;
      // @ts-ignore
      editor.StyleManager.addStyleTargets({
        // @ts-ignore
        [trait.get('name')]: `${value}px`,
      });
      trait.setValue(value);
    },
    onUpdate({ trait, component, elInput }) {
      const tagType = elInput.querySelector('.style-input') as HTMLInputElement;

      const styleValue = component.getStyle(trait.getName());

      if (typeof styleValue === 'string') {
        // @ts-ignore
        tagType.value = styleValue?.match(/[0-9]*/g)[0];
      } else if (!styleValue) {
        tagType.value = '';
      }
    },
  });

  editor.on('change:device', () => {
    const component = editor.getSelected();

    if (component) {
      const styleTraits = component.getTraits().filter((el) => el.getType() === 'style-input');
      if (styleTraits?.length) {
        styleTraits.forEach((trait) => {
          const styleValue = component.getStyle(trait?.getName());

          setTimeout(() => {
            trait.setValue(styleValue || '');
          }, 4);
        });
      }
    }
  });
};
