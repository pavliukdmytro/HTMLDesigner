import type { Editor } from 'grapesjs';
import styles from './listComponent.m.scss';

const listComponent = (editor: Editor) => {
  editor.DomComponents.addType('list', {
    // Make the editor understand when to bind `my-input-type`
    isComponent: (el: HTMLElement) => el.tagName === 'UL' || el.tagName === 'OL',
    // Model definition
    // extend: 'text',
    model: {
      // Default properties
      defaults: {
        tagName: 'ul',
        attributes: { class: 'g-list', 'data-gjs-type': 'list' },
        editable: true,
        styles,
        content: '',
        droppable: ['li'],
        components: [
          {
            type: 'list-item',
          },
        ],
        traits: [
          {
            type: 'tag',
            name: 'list_tag',
            label: 'list tag',
            options: [
              { id: 'ul', label: 'ul' },
              { id: 'ol', label: 'ol' },
            ],
          },
        ],
        // components
        // draggable: true,
      },
    },
  });
};

export default listComponent;
