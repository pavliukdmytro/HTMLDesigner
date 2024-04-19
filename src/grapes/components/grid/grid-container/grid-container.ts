import type { Editor } from 'grapesjs';

// console.log(Editor);
// import type { Component } from 'grapesjs/dist/index.d.ts';
// import styles from './grid-container.m.scss';

const containerComponentType = 'grid-container';

// console.log(styles);

const gridContainerComponent = (editor: Editor) => {
  editor.DomComponents.addType(containerComponentType, {
    // Make the editor understand when to bind `my-input-type`
    // isComponent: (el) => el.tagName === 'INPUT',
    // Model definition
    model: {
      // Default properties
      defaults: {
        tagName: 'div',
        attributes: {
          'data-gjs-type': containerComponentType,
        },
        // attributes: { class: 'grid-container' },
        // style: {},
        style: {
          display: 'grid',
        },
        // @ts-ignore
        droppable: (dropped) =>
          // console.log(dropped);
          dropped?.getName() === 'Grid-item',
        // components: {},
        // draggable: 'form, form *', // Can be dropped only inside `form` elements
        // droppable: false, // Can't drop other elements inside
        // stylable: ['width', 'height'],
        // unstylable: ['color']
        stylable: [''],
        components: [{ type: 'grid-item' }],
        // droppable: ['grid-item, grid-item *'],
        // styles,
        traits() {
          return [
            {
              type: 'style-select',
              name: 'grid-template-columns',
              label: 'column',
              changeProp: true,
              // default: 'repeat(1, minmax(0, 1fr))',
              options: [
                { value: 'repeat(1, minmax(0, 1fr))', name: 'col 1' },
                { value: 'repeat(2, minmax(0, 1fr))', name: 'col 2' },
                { value: 'repeat(3, minmax(0, 1fr))', name: 'col 3' },
                { value: 'repeat(4, minmax(0, 1fr))', name: 'col 4' },
                { value: 'repeat(5, minmax(0, 1fr))', name: 'col 5' },
                { value: 'repeat(6, minmax(0, 1fr))', name: 'col 6' },
                { value: 'repeat(7, minmax(0, 1fr))', name: 'col 7' },
                { value: 'repeat(8, minmax(0, 1fr))', name: 'col 8' },
                { value: 'repeat(9, minmax(0, 1fr))', name: 'col 9' },
                { value: 'repeat(10, minmax(0, 1fr))', name: 'col 10' },
                { value: 'repeat(11, minmax(0, 1fr))', name: 'col 11' },
                { value: 'repeat(12, minmax(0, 1fr))', name: 'col 12' },
              ],
            },
            {
              type: 'style-input',
              name: 'grid-row-gap',
              label: 'row gap',
              placeholder: '0px',
              changeProp: true,
              default: 0,
              // value: 200,
              // min: 0, // Minimum number value
              // units: ['px'],
              // max: 100, // Maximum number value
              // step: 1, // Number of steps
            },
            {
              type: 'style-input',
              name: 'grid-column-gap',
              label: 'column gap',
              placeholder: '0px',
              changeProp: true,
              default: 0,
              // value: 15,
              // units: ['px'],
              // min: 0, // Minimum number value
              // max: 100, // Maximum number value
              // step: 1, // Number of steps
            },
            {
              type: 'style-select',
              name: 'align-items',
              label: 'vertical align',
              changeProp: true,
              default: 'initial',
              options: [
                { value: 'initial', name: 'initial' },
                { value: 'flex-start', name: 'start' },
                { value: 'center', name: 'center' },
                { value: 'flex-end', name: 'end' },
              ],
            },
          ];
        },
      },
    },
  });
};

export default gridContainerComponent;
