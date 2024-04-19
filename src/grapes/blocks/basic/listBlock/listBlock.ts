import { BlockProperties } from 'grapesjs';
// import type { Editor } from 'grapesjs/dist/index';

// import styles from './linkBlock.m.scss';

const listBlock: BlockProperties = {
  id: 'list', // id is mandatory
  category: {
    id: 'basic',
    label: 'basic',
    open: false,
  },
  media: '<i class="fa fa-list-alt" aria-hidden="true"></i>',
  label: `
      <div class="gjs-block-label">List</div>
    `,
  select: true,
  content: {
    type: 'list',
    // draggable: true,
    editable: true,
    // styles,
    // content: `
    //     <a class="g-link-block" href=""></a>
    // `,
  },
};

export default listBlock;
