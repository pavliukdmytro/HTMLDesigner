import grid from '@/grapes/blocks/grid/grid';
import buttons from '@/grapes/blocks/buttons/buttons';

export default {
  appendTo: '#blocks',
  blocks: [
    ...grid,
    ...buttons,
    {
      id: 'section', // id is mandatory
      category: 'blocks',
      label: '<b>Section</b>', // You can use HTML/SVG inside labels
      // attributes: { class: 'gjs-block-section' },
      content: `<section>
          <h1>This is a simple title</h1>
          <div>This is just a Lorem text: Lorem ipsum dolor sit amet</div>
        </section>`,
    },
    {
      id: 'section2', // id is mandatory
      category: 'blocks',
      label: '<b>Section2</b>', // You can use HTML/SVG inside labels
      attributes: { class: 'gjs-block-section' },
      content: `<section>
          <h1>This is a simple title2</h1>
          <div>This is just a Lorem text: Lorem ipsum dolor sit amet2</div>
        </section>`,
    },
    {
      id: 'text',
      label: 'Text',
      category: 'text',
      content: '<div data-gjs-type="text">Insert your text here</div>',
      draggable: false,
    },
    {
      id: 'image',
      label: 'Image',
      // Select the component once it's dropped
      select: true,
      // You can pass components as a JSON instead of a simple HTML string,
      // in this case we also use a defined component type `image`
      content: { type: 'image' },
      // This triggers `active` event on dropped components and the `image`
      // reacts by opening the AssetManager
      activate: true,
    },
  ],
};
