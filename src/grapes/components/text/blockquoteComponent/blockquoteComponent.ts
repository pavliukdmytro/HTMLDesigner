import type { Editor } from 'grapesjs';

const blockquoteComponent = (editor: Editor) => {
  editor.DomComponents.addType('blockquote', {
    // Make the editor understand when to bind `my-input-type`
    // isComponent: (el) => el.tagName === 'INPUT',
    // Model definition
    // extend: 'text',
    model: {
      // Default properties
      defaults: {
        tagName: 'blockquote',
        attributes: { 'data-gjs-type': 'blockquote' },
        editable: true,
        droppable: true,
        // styles,
        components: [
          {
            type: 'paragraph',
          },
        ],
        // traits: [
        //   {
        //     type: 'tag',
        //     name: 'title_tag',
        //     label: 'title tag',
        //     options: [
        //       { id: 'h1', label: 'h1' },
        //       { id: 'h2', label: 'h2' },
        //       { id: 'h3', label: 'h3' },
        //       { id: 'h4', label: 'h4' },
        //       { id: 'h5', label: 'h5' },
        //       { id: 'h6', label: 'h6' },
        //     ],
        //   },
        // ],
      },
    },
  });
};

export default blockquoteComponent;
