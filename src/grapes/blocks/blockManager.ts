import grid from '@/grapes/blocks/grid/grid';
import buttons from '@/grapes/blocks/buttons/buttons';
import basic from '@/grapes/blocks/basic/basic';
import text from '@/grapes/blocks/text/text';
import type { BlockManagerConfig } from 'grapesjs';

const blockManager: BlockManagerConfig = {
  appendTo: '#blocks',
  blocks: [
    ...basic,
    ...text,
    ...grid,
    ...buttons,
    // {
    //   id: 'section', // id is mandatory
    //   category: 'blocks',
    //   label: '<b>Section</b>', // You can use HTML/SVG inside labels
    //   // attributes: { class: 'gjs-block-section' },
    //   content: `<section>
    //       <h1>This is a simple title</h1>
    //       <div>This is just a Lorem text: Lorem ipsum dolor sit amet</div>
    //     </section>`,
    // },
    // {
    //   id: 'section2', // id is mandatory
    //   category: 'blocks',
    //   label: '<b>Section2</b>', // You can use HTML/SVG inside labels
    //   attributes: { class: 'gjs-block-section' },
    //   content: `<section>
    //       <h1>This is a simple title2</h1>
    //       <div>This is just a Lorem text: Lorem ipsum dolor sit amet2</div>
    //     </section>`,
    // },
    // {
    //   id: 'my-input-type',
    //   label: 'my-input-type',
    //   category: 'text',
    //   content: '<input data-gjs-type="my-input-type">',
    // },
  ],
};

export default blockManager;
