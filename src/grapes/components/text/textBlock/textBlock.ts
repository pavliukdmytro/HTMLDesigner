import type { Editor } from 'grapesjs';
import styles from './textBlock.m.scss';

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
        styles,
        content: '',
      },
    },
  });
};

export default textBlockComponent;
