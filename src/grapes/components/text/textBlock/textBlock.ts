import type { Editor } from 'grapesjs';

// const categoryMobile = { id: 'first', label: 'Mobile' };
// const categoryTablet = { id: 'second', label: 'Tablet' };
// const categoryDesktop = { id: 'third', label: 'Desktop' };

const textBlockComponent = (editor: Editor) => {
  editor.DomComponents.addType('text-block', {
    // Make the editor understand when to bind `my-input-type`
    // isComponent: (el) => el.tagName === 'INPUT',
    // Model definition
    extend: 'text',
    model: {
      // Default properties
      defaults: {
        tagName: 'p',
        attributes: { class: 'text-block' },
        editable: true,
        // inherits: 'text',
        style: {
          'margin-bottom': '16px',
        },
        content: '',
        // traits: [
        //   {
        //     type: 'select',
        //     name: 'alignSelf',
        //     label: 'align Y',
        //     changeProp: true,
        //     default: 'initial',
        //     // category: categoryMobile,
        //     options: [
        //       { value: 'initial', name: 'initial' },
        //       { value: 'flex-start', name: 'start' },
        //       { value: 'center', name: 'center' },
        //       { value: 'flex-end', name: 'end' },
        //     ],
        //   },
        //   {
        //     type: 'select',
        //     name: 'justifySelf',
        //     label: 'align X',
        //     changeProp: true,
        //     default: 'stretch',
        //     // category: categoryMobile,
        //     options: [
        //       { value: 'stretch', name: 'stretch' },
        //       { value: 'start', name: 'start' },
        //       { value: 'center', name: 'center' },
        //       { value: 'end', name: 'end' },
        //     ],
        //   },
        //   {
        //     type: 'select',
        //     name: 'columnSize',
        //     label: 'column size',
        //     changeProp: true,
        //     default: 1,
        //     // category: categoryMobile,
        //     options: [
        //       { value: 1, name: 'col 1' },
        //       { value: 2, name: 'col 2' },
        //       { value: 3, name: 'col 3' },
        //       { value: 4, name: 'col 4' },
        //       { value: 5, name: 'col 5' },
        //       { value: 6, name: 'col 6' },
        //       { value: 7, name: 'col 7' },
        //       { value: 8, name: 'col 8' },
        //       { value: 9, name: 'col 9' },
        //       { value: 10, name: 'col 10' },
        //       { value: 11, name: 'col 11' },
        //       { value: 12, name: 'col 12' },
        //     ],
        //   },
        //   // {
        //   //   type: 'number',
        //   //   name: 'rowGap',
        //   //   label: 'row gap',
        //   //   placeholder: '0px',
        //   //   changeProp: true,
        //   //   // default: 0,
        //   //   value: 0,
        //   //   // min: 0, // Minimum number value
        //   //   // max: 100, // Maximum number value
        //   //   step: 1, // Number of steps
        //   // },
        //   // {
        //   //   type: 'number',
        //   //   name: 'columnGap',
        //   //   label: 'column gap',
        //   //   placeholder: '0px',
        //   //   changeProp: true,
        //   //   default: 0,
        //   //   // min: 0, // Minimum number value
        //   //   // max: 100, // Maximum number value
        //   //   step: 1, // Number of steps
        //   // },
        // ],
      },
      // init() {
      //   // Also the listener changes from `change:attributes:*` to `change:*`
      //   // @ts-ignore
      //   this.on('change:alignSelf', this.handlerChangeProps);
      //   // @ts-ignore
      //   this.on('change:justifySelf', this.handlerChangeProps);
      //   // @ts-ignore
      //   this.on('change:columnSize', this.handlerChangeProps);
      // },
      // handlerChangeProps(e: Editor) {
      //   // @ts-ignore
      //   const { alignSelf, justifySelf, columnSize } = e.props();
      //   // @ts-ignore
      //   // console.log(e, e.props());
      //   const styles = `
      //       align-self: ${alignSelf ?? 'initial'};
      //       justify-self: ${justifySelf ?? 'stretch'};
      //       grid-column: span ${columnSize ?? 1};
      //   `;
      //   e.setStyle(styles);
      // },
    },
  });
};

export default textBlockComponent;
