import './buttons.scss';
import type { BlockProperties } from 'grapesjs';

const category = 'Buttons';

const buttonsArray: Array<BlockProperties> = [
  {
    id: 'button-primary', // id is mandatory
    category,
    label: `<div>Button primary</div>`,
    // type: 'link',
    content: `
        <a class="g-button-primary" data-gjs-type="link" data-gjs-droppable="true" href="">Button primary</a>
    `,
  },
  {
    id: 'button-secondary', // id is mandatory
    category,
    label: `<div>Button secondary</div>`,
    // type: 'link',
    content: `
        <a class="g-button-secondary" data-gjs-type="link" data-gjs-droppable="true" href="">Button secondary</a>
    `,
  },
];

export default buttonsArray;
