export default {
  appendTo: '#blocks',
  blocks: [
    {
      id: 'column_1', // id is mandatory
      category: 'Basic',
      label: `<svg viewBox="0 0 24 24">\\n' +
        '        <path fill="currentColor" d="M2 20h20V4H2v16Zm-1 0V4a1 1 0 0 1 1-1h20a1 1 0 0 1 1 1v16a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1Z"></path>\\n' +
        '      </svg>
        <div class="gjs-block-label">1 Column</div>
`, // You can use HTML/SVG inside labels
      attributes: { class: 'gjs-block-section' },
      content: `<div class="row"><div class="col-2">Dima</div><div class="col-2">Dima2</div></div>`,
    },
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
      draggable: true,
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
