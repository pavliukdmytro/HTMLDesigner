import type { Editor } from 'grapesjs/dist/index';

export default (editor: Editor) => {
  editor.Traits.addType('tag', {
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
            (opt: { id: string; label: string }) =>
              `<option value="${opt.id}">${opt.label}</option>`
          )
          .join('')}
      </select>
    `;

      return el;
    },
    onEvent({ component, event }) {
      // @ts-ignore
      component.set({ tagName: event?.target?.value });
    },
    onUpdate({ elInput, component }) {
      const el = component.getEl() as HTMLElement;
      const tagType = elInput.querySelector('.tag-type') as HTMLSelectElement;

      tagType.value = el.tagName.toLowerCase();
    },
  });
};
