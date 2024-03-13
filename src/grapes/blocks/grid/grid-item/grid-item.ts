// import './grid.scss';
import type { BlockProperties } from 'grapesjs';

const gridItemBlock: BlockProperties = {
  id: 'grid-item', // id is mandatory
  category: 'grid',
  label: `<svg viewBox="0 0 24 24">\\n' +
        '        <path fill="currentColor" d="M2 20h20V4H2v16Zm-1 0V4a1 1 0 0 1 1-1h20a1 1 0 0 1 1 1v16a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1Z"></path>\\n' +
        '      </svg>
        <div class="gjs-block-label">grid item</div>`,
  select: true,
  content: {
    type: 'grid-item',
    draggable: true,
    editable: true,
  },
};
export default gridItemBlock;
