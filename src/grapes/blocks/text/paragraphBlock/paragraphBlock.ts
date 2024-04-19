import type { BlockProperties } from 'grapesjs';

const paragraphBlock: BlockProperties = {
  id: 'textBlock', // id is mandatory
  category: {
    id: 'text',
    label: 'text',
    open: false,
  },
  label: `
    <div class="gjs-block__media">
      <i class="fa fa-solid fa-paragraph"></i>
      </div>
      <div class="gjs-block-label">Paragraph</div>
    `,
  select: true,
  content: {
    type: 'paragraph',
    draggable: true,
    editable: true,
  },
};

export default paragraphBlock;
