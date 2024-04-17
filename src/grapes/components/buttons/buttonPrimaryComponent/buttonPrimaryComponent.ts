import type { Editor } from 'grapesjs';
import styles from './buttonPrimaryComponent.m.scss';

const buttonPrimaryComponent = (editor: Editor) => {
  editor.DomComponents.addType('button-primary', {
    // Make the editor understand when to bind `my-input-type`
    // isComponent: (el) => el.tagName === 'INPUT',
    // Model definition
    extend: 'text',
    model: {
      // Default properties
      defaults: {
        tagName: 'button',
        attributes: { class: 'g-button-primary', 'data-gjs-type': 'button-primary' },
        editable: true,
        styles,
        content: '',
      },
    },
  });
};

export default buttonPrimaryComponent;
