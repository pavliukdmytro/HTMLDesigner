import type { Editor } from 'grapesjs';
import styles from './container.m.scss';

const containerComponentType = 'container';

const containerComponent = (editor: Editor) => {
  editor.DomComponents.addType(containerComponentType, {
    // Make the editor understand when to bind `my-input-type`
    // isComponent: (el) => el.tagName === 'INPUT',
    // Model definition
    model: {
      // Default properties
      defaults: {
        tagName: 'div',
        attributes: { class: 'container' },
        styles,
      },
    },
  });
};

export default containerComponent;
