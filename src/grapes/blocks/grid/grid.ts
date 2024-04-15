import type { BlockProperties } from 'grapesjs';
import gridContainerBlock from '@/grapes/blocks/grid/grid-container/grid-container';
import gridItemBlock from '@/grapes/blocks/grid/grid-item/grid-item';

const category = 'grid';

const gridBlocks: Array<BlockProperties> = [
  {
    id: 'container', // id is mandatory
    category,
    media:
      '<svg viewBox="0 0 24 24"><path fill="currentColor" d="M2 20h20V4H2v16Zm-1 0V4a1 1 0 0 1 1-1h20a1 1 0 0 1 1 1v16a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1Z"></path></svg>',
    label: `Container`,
    content: {
      type: 'container',
      draggable: true,
      editable: true,
    },
  },
  gridContainerBlock,
  gridItemBlock,
];

export default gridBlocks;
