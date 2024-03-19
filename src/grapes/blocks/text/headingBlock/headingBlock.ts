import type { BlockProperties } from 'grapesjs';

const headingBlock: BlockProperties = {
  id: 'headingBlock', // id is mandatory
  category: 'text',
  label: `
      <h2 class="gjs-block__media">H</h2>
      <div class="gjs-block-label">Heading</div>
    `,
  select: true,
  content: {
    type: 'heading',
    draggable: true,
    editable: true,
  },
};

export default headingBlock;
