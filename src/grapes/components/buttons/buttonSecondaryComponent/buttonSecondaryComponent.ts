import type { Editor } from 'grapesjs';
import styles from './buttonSecondaryComponent.m.scss';

console.log(styles);

const buttonSecondaryComponent = (editor: Editor) => {
  editor.DomComponents.addType('button-secondary', {
    // Make the editor understand when to bind `my-input-type`
    // isComponent: (el) => el.tagName === 'INPUT',
    // Model definition
    extend: 'text',
    model: {
      // Default properties
      defaults: {
        tagName: 'button',
        attributes: { class: 'g-button-secondary', 'data-gjs-type': 'button-secondary' },
        editable: true,
        styles,
        content: '',
      },
    },
  });
};

export default buttonSecondaryComponent;
