import type { BlockProperties } from 'grapesjs';
import gridContainerBlock from '@/grapes/blocks/grid/grid-container/grid-container';
import gridItemBlock from '@/grapes/blocks/grid/grid-item/grid-item';
import container from '@/grapes/blocks/grid/container/container';

// const category = 'grid';

const gridBlocks: Array<BlockProperties> = [container, gridContainerBlock, gridItemBlock];

export default gridBlocks;
