import './grid.scss';
import type { BlockProperties } from 'grapesjs';
import gridContainerBlock from '@/grapes/blocks/grid/grid-container/grid-container';
import gridItemBlock from '@/grapes/blocks/grid/grid-item/grid-item';

const category = 'grid';

const gridBlocks: Array<BlockProperties> = [
  {
    id: 'container', // id is mandatory
    category,
    label: `<svg viewBox="0 0 24 24">\\n' +
        '        <path fill="currentColor" d="M2 20h20V4H2v16Zm-1 0V4a1 1 0 0 1 1-1h20a1 1 0 0 1 1 1v16a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1Z"></path>\\n' +
        '      </svg>
        <div class="gjs-block-label">container</div>`,
    content: `
        <section class="container" data-gjs-droppable="true"></section>
    `,
  },
  gridContainerBlock,
  gridItemBlock,
];

export default gridBlocks;
