// import './grid.scss';
import type { BlockProperties } from 'grapesjs';

const category = 'grid';

const gridContainerBlock: BlockProperties = {
  id: 'grid-container', // id is mandatory
  category,
  label: `<svg viewBox="0 0 24 24">\\n' +
        '        <path fill="currentColor" d="M2 20h20V4H2v16Zm-1 0V4a1 1 0 0 1 1-1h20a1 1 0 0 1 1 1v16a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1Z"></path>\\n' +
        '      </svg>
        <div class="gjs-block-label">grid container</div>`,
  select: true,
  content: {
    type: 'grid-container',
    draggable: true,
    editable: true,
  },
};
export default gridContainerBlock;
