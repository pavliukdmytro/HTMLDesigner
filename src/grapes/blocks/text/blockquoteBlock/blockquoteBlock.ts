import type { BlockProperties } from 'grapesjs';

const blockquoteBlock: BlockProperties = {
  id: 'blockquoteBlock', // id is mandatory
  category: {
    id: 'text',
    label: 'text',
    open: false,
  },
  media: '<i class="fa fa-solid fa-quote-left"></i>',
  label: `<div class="gjs-block-label">Blockquote</div>`,
  select: true,
  content: {
    type: 'blockquote',
    draggable: true,
    editable: true,
  },
};

export default blockquoteBlock;
