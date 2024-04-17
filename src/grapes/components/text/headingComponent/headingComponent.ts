import type { Editor } from 'grapesjs';

const headingComponent = (editor: Editor) => {
  editor.DomComponents.addType('heading', {
    // Make the editor understand when to bind `my-input-type`
    // isComponent: (el) => el.tagName === 'INPUT',
    // Model definition
    extend: 'text',
    model: {
      // Default properties
      defaults: {
        tagName: 'h1',
        attributes: { class: 'g-title', 'data-gjs-type': 'heading' },
        editable: true,
        // styles,
        content: '',
        traits: [
          {
            type: 'tag',
            name: 'title_tag',
            label: 'title tag',
            options: [
              { id: 'h1', label: 'h1' },
              { id: 'h2', label: 'h2' },
              { id: 'h3', label: 'h3' },
              { id: 'h4', label: 'h4' },
              { id: 'h5', label: 'h5' },
              { id: 'h6', label: 'h6' },
            ],
          },
        ],
      },
    },
  });
};

export default headingComponent;
