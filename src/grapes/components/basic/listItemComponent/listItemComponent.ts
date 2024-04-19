import type { Editor } from 'grapesjs';
import styles from './listItemComponent.m.scss';

const listItemComponent = (editor: Editor) => {
  editor.DomComponents.addType('list-item', {
    // Make the editor understand when to bind `my-input-type`
    isComponent: (el: HTMLElement) => el.tagName === 'LI',
    // Model definition
    extend: 'text',
    model: {
      // Default properties
      defaults: {
        tagName: 'li',
        attributes: { class: 'g-li', 'data-gjs-type': 'list-item' },
        editable: true,
        styles,
        content: '',
        draggable: 'ul, ol', // Can be dropped only inside `ul` elements
      },
    },
  });
};

export default listItemComponent;
