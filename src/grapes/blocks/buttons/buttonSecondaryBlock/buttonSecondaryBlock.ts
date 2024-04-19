// import '@/grapes/blocks/text/link/link.scss';
import type { BlockProperties } from 'grapesjs';

const buttonSecondaryBlock: BlockProperties = {
  id: 'button-secondary', // id is mandatory
  category: {
    id: 'buttons',
    label: 'buttons',
    open: false,
  },
  media: '<i class="fa fa-square-o" aria-hidden="true"></i>',
  label: `<div>Button secondary</div>`,
  content: {
    type: 'button-secondary',
    draggable: true,
    editable: true,
  },
};

export default buttonSecondaryBlock;
