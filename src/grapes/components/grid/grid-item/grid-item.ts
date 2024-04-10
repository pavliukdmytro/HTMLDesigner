import type { Editor } from 'grapesjs';

const containerComponentType = 'grid-item';

const gridItemComponent = (editor: Editor) => {
  editor.DomComponents.addType(containerComponentType, {
    // Make the editor understand when to bind `my-input-type`
    // isComponent: (el) => el.tagName === 'INPUT',
    // Model definition
    model: {
      // Default properties
      defaults: {
        tagName: 'div',
        attributes: { class: 'grid-item' },
        // draggable: 'form, form *', // Can be dropped only inside `form` elements
        // droppable: false, // Can't drop other elements inside
        // styles: `.grid-container {display: grid;}`,
        // style: {
        // display: 'grid',
        //   width: '100px',
        //   height: '100px',
        //   background: 'red',
        // },

        traits: [
          {
            type: 'style-select',
            name: 'align-self',
            label: 'align Y',
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
          {
            type: 'style-select',
            name: 'justify-self',
            label: 'align X',
            changeProp: true,
            default: 'stretch',
            options: [
              { value: 'stretch', name: 'stretch' },
              { value: 'start', name: 'start' },
              { value: 'center', name: 'center' },
              { value: 'end', name: 'end' },
            ],
          },
          {
            type: 'style-select',
            name: 'grid-column',
            label: 'column size',
            changeProp: true,
            default: 1,
            // category: categoryMobile,
            options: [
              { value: 'span 1', name: 'col 1' },
              { value: 'span 2', name: 'col 2' },
              { value: 'span 3', name: 'col 3' },
              { value: 'span 4', name: 'col 4' },
              { value: 'span 5', name: 'col 5' },
              { value: 'span 6', name: 'col 6' },
              { value: 'span 7', name: 'col 7' },
              { value: 'span 8', name: 'col 8' },
              { value: 'span 9', name: 'col 9' },
              { value: 'span 10', name: 'col 10' },
              { value: 'span 11', name: 'col 11' },
              { value: 'span 12', name: 'col 12' },
            ],
          },
        ],
      },
    },
  });
};

export default gridItemComponent;
