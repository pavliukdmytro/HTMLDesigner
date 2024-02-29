import './buttons.scss';

const category = 'Buttons';

export default [
  {
    id: 'button-primary', // id is mandatory
    category,
    label: `<div>Button primary</div>`,
    type: 'link',
    content: `
        <a class="g-button-primary" data-gjs-type="link" data-gjs-droppable="true" href="">Button primary</a>
    `,
    style: {},
  },
  {
    id: 'button-secondary', // id is mandatory
    category,
    label: `<div>Button secondary</div>`,
    type: 'link',
    content: `
        <a class="g-button-secondary" data-gjs-type="link" data-gjs-droppable="true" href="">Button secondary</a>
    `,
    style: {},
  },
];
