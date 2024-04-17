import type { Editor } from 'grapesjs';
import styles from './paragraphComponent.m.scss';

const paragraphComponent = (editor: Editor) => {
  editor.DomComponents.addType('paragraph', {
    // Make the editor understand when to bind `my-input-type`
    // isComponent: (el) => el.tagName === 'INPUT',
    // Model definition
    extend: 'text',
    model: {
      // Default properties
      defaults: {
        tagName: 'p',
        attributes: { class: 'paragraph', 'data-gjs-type': 'paragraph' },
        editable: true,
        styles,
        content: '',
      },
    },
  });
};

export default paragraphComponent;
