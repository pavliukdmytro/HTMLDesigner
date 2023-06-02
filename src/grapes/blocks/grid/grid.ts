import './grid.scss';

const category = 'grid';

export default [
  {
    id: 'container', // id is mandatory
    category,
    label: `<svg viewBox="0 0 24 24">\\n' +
        '        <path fill="currentColor" d="M2 20h20V4H2v16Zm-1 0V4a1 1 0 0 1 1-1h20a1 1 0 0 1 1 1v16a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1Z"></path>\\n' +
        '      </svg>
        <div class="gjs-block-label">container</div>`,
    content: `
        <section class="container" data-gjs-droppable="true"></section>
    `,
    style: {},
  },

  {
    id: 'column_2',
    category,
    label: `<div class="gjs-block__media"><svg viewBox="0 0 23 24">
        <path fill="currentColor" d="M2 20h8V4H2v16Zm-1 0V4a1 1 0 0 1 1-1h8a1 1 0 0 1 1 1v16a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1ZM13 20h8V4h-8v16Zm-1 0V4a1 1 0 0 1 1-1h8a1 1 0 0 1 1 1v16a1 1 0 0 1-1 1h-8a1 1 0 0 1-1-1Z"></path>
      </svg></div>
      <div class="gjs-block-label">2 Columns</div>
  `,
    attributes: { class: 'gjs-block-section' },
    content: `<div class="row"><div class="col-md-6" data-gjs-droppable="true"></div><div class="col-md-6" data-gjs-droppable="true"></div></div>`,
  },
];
