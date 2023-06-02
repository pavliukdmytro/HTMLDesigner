export default (editor, config) => {
  const bm = editor.BlockManager;
  bm.getAll().reset();

  // Layouts
  const stylePrefix = 'gjs-';
  const flexGrid = 0;
  const clsRow = `${stylePrefix}row`;
  const clsCell = `${stylePrefix}cell`;
  const styleRow = flexGrid
    ? `
    .${clsRow} {
      display: flex;
      justify-content: flex-start;
      align-items: stretch;
      flex-wrap: nowrap;
      padding: 10px;
    }
    @media (max-width: 768px) {
      .${clsRow} {
        flex-wrap: wrap;
      }
    }`
    : `
    .${clsRow} {
      display: table;
      padding: 10px;
      width: 100%;
    }
    @media (max-width: 768px) {
      .${stylePrefix}cell, .${stylePrefix}cell30, .${stylePrefix}cell70 {
        width: 100%;
        display: block;
      }
    }`;

  const styleClm = `.${clsCell} {
      width: 8%;
      display: table-cell;
      height: 75px;
    }`;

  const minDim = 1;
  const resizerBtm = { tl: 0, tc: 0, tr: 0, cl: 0, cr: 0, bl: 0, br: 0, minDim };

  const rowAttr = {
    class: clsRow,
    'data-gjs-droppable': `.${clsCell}`,
    'data-gjs-resizable': resizerBtm,
    'data-gjs-name': 'Row',
  };

  const colAttr = {
    class: clsCell,
    'data-gjs-draggable': `.${clsRow}`,
    // 'data-gjs-resizable': false,
    'data-gjs-name': 'Cell',
  };

  // Make row and column classes private
  const privateCls = [`.${clsRow}`, `.${clsCell}`];
  editor.on(
    'selector:add',
    (selector) => privateCls.indexOf(selector.getFullName()) >= 0 && selector.set('private', 1)
  );

  const attrsToString = (attrs) => {
    const result = [];
    for (const key in attrs) {
      if (attrs.hasOwnProperty(key)) {
        let value = attrs[key];
        const toParse = value instanceof Array || value instanceof Object;
        value = toParse ? JSON.stringify(value) : value;
        result.push(`${key}=${toParse ? `'${value}'` : `"${value}"`}`);
      }
    }
    return result.length ? ` ${result.join(' ')}` : '';
  };

  // const toAdd = name => blocks.indexOf(name) >= 0;
  const attrsRow = attrsToString(rowAttr);
  const attrsCell = attrsToString(colAttr);

  bm.add('column1', {
    label: '1 Section',
    category: 'Layout',
    attributes: { class: 'gjs-fonts gjs-f-b1' },
    content: `<div ${attrsRow}>
      <div ${attrsCell}></div>
      </div>
      <style>
        ${styleRow}
        ${styleClm}
      </style>`,
  });

  bm.add('column2', {
    label: '2 Section',
    category: 'Layout',
    attributes: { class: 'gjs-fonts gjs-f-b2' },
    content: `<div ${attrsRow}>
        <div ${attrsCell}></div>
        <div ${attrsCell}></div>
      </div>
      <style>
        ${styleRow}
        ${styleClm}
      </style>`,
  });

  bm.add('column3', {
    label: '3 Section',
    category: 'Layout',
    attributes: { class: 'gjs-fonts gjs-f-b3' },
    content: `<div ${attrsRow}>
        <div ${attrsCell}></div>
        <div ${attrsCell}></div>
        <div ${attrsCell}></div>
      </div>
      <style>
        ${styleRow}
        ${styleClm}
      </style>`,
  });

  bm.add('column4', {
    label: '4 Section',
    category: 'Layout',
    attributes: { class: 'gjs-fonts gjs-f-b4' },
    content: `<div ${attrsRow}>
        <div ${attrsCell}></div>
        <div ${attrsCell}></div>
        <div ${attrsCell}></div>
        <div ${attrsCell}></div>
      </div>
      <style>
        ${styleRow}
        ${styleClm}
      </style>`,
  });

  bm.add('column8-4', {
    label: '8-4 Section',
    category: 'Layout',
    attributes: { class: 'gjs-fonts gjs-f-b37' },
    content: `<div ${attrsRow}>
        <div ${attrsCell} style="${flexGrid ? 'flex-basis' : 'width'}: 33.33%;"></div>
        <div ${attrsCell} style="${flexGrid ? 'flex-basis' : 'width'}: 66.66%;"></div>
      </div>
      <style>
        ${styleRow}
        ${styleClm}
      </style>`,
  });

  bm.add('column4-8', {
    label: '4-8 Section',
    category: 'Layout',
    attributes: { class: 'gjs-fonts gjs-f-b37' },
    content: `<div ${attrsRow}>
        <div ${attrsCell} style="${flexGrid ? 'flex-basis' : 'width'}: 66.66%;"></div>
        <div ${attrsCell} style="${flexGrid ? 'flex-basis' : 'width'}: 33.33%;"></div>
      </div>
      <style>
        ${styleRow}
        ${styleClm}
      </style>`,
  });

  bm.add('column3-9', {
    label: '3-9 Section',
    category: 'Layout',
    attributes: { class: 'gjs-fonts gjs-f-b37' },
    content: `<div ${attrsRow}>
        <div ${attrsCell} style="${flexGrid ? 'flex-basis' : 'width'}: 25%;"></div>
        <div ${attrsCell} style="${flexGrid ? 'flex-basis' : 'width'}: 75%;"></div>
      </div>
      <style>
        ${styleRow}
        ${styleClm}
      </style>`,
  });

  bm.add('column9-3', {
    label: '9-3 Section',
    category: 'Layout',
    attributes: { class: 'gjs-fonts gjs-f-b37' },
    content: `<div ${attrsRow}>
        <div ${attrsCell} style="${flexGrid ? 'flex-basis' : 'width'}: 75%;"></div>
        <div ${attrsCell} style="${flexGrid ? 'flex-basis' : 'width'}: 25%;"></div>
      </div>
      <style>
        ${styleRow}
        ${styleClm}
      </style>`,
  });

  // Layout Elements
  bm.add('text', {
    category: 'Layout Element',
    label: 'Text',
    attributes: { class: 'gjs-fonts gjs-f-text' },
    content: {
      type: 'text',
      content: 'Insert your text here',
      style: { padding: '10px' },
      activeOnRender: 1,
    },
  });

  bm.add('text-basic', {
    category: 'Layout Element',
    label: 'Text section',
    attributes: { class: 'gjs-fonts gjs-f-h1p' },
    content: `<section class="bdg-sect">
      <h1 class="heading">Insert title here</h1>
      <p class="paragraph">Lorem ipsum dolor sit amet, consectetur
      adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua</p>
      </section>`,
  });

  bm.add('quote', {
    label: 'Quote',
    category: 'Layout Element',
    attributes: { class: 'fa fa-quote-right' },
    content: `<blockquote>
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore ipsum dolor sit"
      </blockquote>`,
  });

  bm.add('image', {
    label: 'Image',
    category: 'Layout Element',
    attributes: { class: 'gjs-fonts gjs-f-image' },
    content: {
      type: 'image',
      style: { color: 'black' },
      activeOnRender: 1,
    },
  });
};
