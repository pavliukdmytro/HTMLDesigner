import type { Editor } from 'grapesjs/dist/index';

export default (editor: Editor) => {
  editor.Traits.addType('style-select', {
    // Expects as return a simple HTML string or an HTML element
    createInput({ trait }) {
      // @ts-ignore
      const options = trait.get('options');

      // Create a new element container and add some content
      const el = document.createElement('div');
      el.innerHTML = `
      <select class="tag-type">
        ${options
          .map(
            (opt: { value: string; name: string }) =>
              `<option value="${opt.value}">${opt.name}</option>`
          )
          .join('')}
      </select>
      <div class="gjs-sel-arrow">
        <div class="gjs-d-s-arrow"></div>
      </div>
    `;

      return el;
    },
    onEvent({ event, trait }) {
      // @ts-ignore
      const value = event?.target?.value;
      editor.getSelected()?.addStyle({
        // @ts-ignore
        [trait.get('name')]: value,
      });
      // @ts-ignore
      // editor.StyleManager.addStyleTargets({
      //   // @ts-ignore
      //   [trait.get('name')]: value,
      // });
      // console.log('set');
      trait.setValue(value);
    },
    onUpdate({ trait, component, elInput }) {
      const tagType = elInput.querySelector('.tag-type') as HTMLSelectElement;

      const styleValue = component.getStyle(trait.getName()) || trait.props().default;
      // console.log(typeof styleValue);
      if (styleValue) {
        // @ts-ignore
        tagType.value = styleValue;
      }
    },
    // init() {},
  });

  editor.on('change:device', () => {
    const component = editor.getSelected();

    if (component) {
      const styleTraits = component.getTraits().filter((el) => el.getType() === 'style-select');
      if (styleTraits?.length) {
        styleTraits.forEach((trait) => {
          const styleValue = component.getStyle(trait?.getName());

          setTimeout(() => {
            trait.setValue(styleValue || trait.props().default);
          }, 4);
        });
      }
    }
  });
};
