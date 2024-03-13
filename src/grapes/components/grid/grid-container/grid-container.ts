import type { Editor } from 'grapesjs';

// const categoryMobile = { id: 'first', label: 'Mobile' };
// const categoryTablet = { id: 'second', label: 'Tablet' };
// const categoryDesktop = { id: 'third', label: 'Desktop' };

const gridContainerComponent = (editor: Editor) => {
  editor.DomComponents.addType('grid-container', {
    // Make the editor understand when to bind `my-input-type`
    // isComponent: (el) => el.tagName === 'INPUT',
    // Model definition
    model: {
      // Default properties
      defaults: {
        tagName: 'div',
        attributes: { class: 'grid-container' },
        // draggable: 'form, form *', // Can be dropped only inside `form` elements
        // droppable: false, // Can't drop other elements inside
        styles: `.grid-container {display: grid;}`,
        // style: {
        // display: 'grid',
        //   width: '100px',
        //   height: '100px',
        //   background: 'red',
        // },

        traits: [
          {
            type: 'select',
            name: 'column',
            label: 'column',
            changeProp: true,
            default: 1,
            // category: categoryMobile,
            options: [
              { value: 1, name: 'col 1' },
              { value: 2, name: 'col 2' },
              { value: 3, name: 'col 3' },
              { value: 4, name: 'col 4' },
              { value: 5, name: 'col 5' },
              { value: 6, name: 'col 6' },
              { value: 7, name: 'col 7' },
              { value: 8, name: 'col 8' },
              { value: 9, name: 'col 9' },
              { value: 10, name: 'col 10' },
              { value: 11, name: 'col 11' },
              { value: 12, name: 'col 12' },
            ],
          },
          {
            type: 'number',
            name: 'rowGap',
            label: 'row gap',
            placeholder: '0px',
            changeProp: true,
            // default: 0,
            value: 0,
            // min: 0, // Minimum number value
            // max: 100, // Maximum number value
            step: 1, // Number of steps
          },
          {
            type: 'number',
            name: 'columnGap',
            label: 'column gap',
            placeholder: '0px',
            changeProp: true,
            default: 0,
            // min: 0, // Minimum number value
            // max: 100, // Maximum number value
            step: 1, // Number of steps
          },
          {
            type: 'select',
            name: 'alignItems',
            label: 'vertical align',
            changeProp: true,
            default: 'initial',
            // category: categoryMobile,
            options: [
              { value: 'initial', name: 'initial' },
              { value: 'flex-start', name: 'start' },
              { value: 'center', name: 'center' },
              { value: 'flex-end', name: 'end' },
            ],
          },
        ],
      },
      init() {
        // Also the listener changes from `change:attributes:*` to `change:*`
        // @ts-ignore
        this.on('change:column', this.handlerChangeProps);
        // @ts-ignore
        this.on('change:rowGap', this.handlerChangeProps);
        // @ts-ignore
        this.on('change:columnGap', this.handlerChangeProps);
        // @ts-ignore
        this.on('change:alignItems', this.handlerChangeProps);
      },
      handlerChangeProps(e: Editor) {
        // @ts-ignore
        const { column, rowGap, columnGap, alignItems } = e.props();
        // @ts-ignore
        console.log(e, e.props());
        const styles = `
            grid-template-columns: repeat(${column ?? 1}, minmax(0, 1fr));
            grid-row-gap: ${rowGap ?? 0}px;
            grid-column-gap: ${columnGap ?? 0}px;
            align-items: ${alignItems ?? 'initial'};
        `;
        e.setStyle(styles);
      },
    },
  });
};

export default gridContainerComponent;
