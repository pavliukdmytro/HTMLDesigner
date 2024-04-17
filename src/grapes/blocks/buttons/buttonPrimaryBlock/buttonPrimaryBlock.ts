// import '@/grapes/blocks/text/link/link.scss';
import type { BlockProperties } from 'grapesjs';

const buttonPrimaryBlock: BlockProperties = {
  id: 'button-primary', // id is mandatory
  category: 'buttons',
  media: '<i class="fa fa-square" aria-hidden="true"></i>',
  label: `<div>Button primary</div>`,
  content: {
    type: 'button-primary',
    draggable: true,
    editable: true,
  },
};

export default buttonPrimaryBlock;
