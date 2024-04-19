import { BlockProperties } from 'grapesjs';
// import type { Editor } from 'grapesjs/dist/index';

// import styles from './linkBlock.m.scss';

const listItemBlock: BlockProperties = {
  id: 'liBlock', // id is mandatory
  category: {
    id: 'basic',
    label: 'basic',
    open: false,
  },
  media: '<i class="fa fa-list-ul" aria-hidden="true"></i>',
  label: `
      <div class="gjs-block-label">list item</div>
    `,
  select: true,
  content: {
    type: 'list-item',
    // draggable: true,
    editable: true,
    // styles,
    // content: `
    //     <a class="g-link-block" href=""></a>
    // `,
  },
};

export default listItemBlock;
