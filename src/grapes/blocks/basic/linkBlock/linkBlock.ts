import { BlockProperties } from 'grapesjs';
import type { Editor } from 'grapesjs/dist/index';

// @ts-ignore
// import * as styles from './linkBlock.scss';
import './linkBlock.scss';

const linkBlock: BlockProperties = {
  id: 'linkBlock', // id is mandatory
  category: 'basic',
  label: `
    <div class="gjs-block__media"><svg viewBox="0 0 24 24">
        <path fill="currentColor" d="M3.9,12C3.9,10.29 5.29,8.9 7,8.9H11V7H7A5,5 0 0,0 2,12A5,5 0 0,0 7,17H11V15.1H7C5.29,15.1 3.9,13.71 3.9,12M8,13H16V11H8V13M17,7H13V8.9H17C18.71,8.9 20.1,10.29 20.1,12C20.1,13.71 18.71,15.1 17,15.1H13V17H17A5,5 0 0,0 22,12A5,5 0 0,0 17,7Z"></path>
      </svg></div>
      <div class="gjs-block-label">Link block</div>
    `,
  select: true,
  content: {
    type: 'link-block',
    draggable: true,
    editable: true,
    // content: `
    //     <a class="g-link-block" href=""></a>
    // `,
  },
};

export const linkBlockComponentType = (editor: Editor) => {
  editor.DomComponents.addType('link-block', {
    model: {
      defaults: {
        tagName: 'a',
        editable: true,
        inlineComponent: true,
        // draggable: 'form, form *', // Can be dropped only inside `form` elements
        // droppable: false, // Can't drop other elements inside
        components: '',
        // style: { 'min-height': '10px', 'min-width': '10px' },
        // styles: `.g-link-block { color: red }`,
        // styles: `.g-link-block { color: red }`,
        // styles: styles.default.toString(),
        attributes: {
          // Default attributes
          class: 'g-link-block',
          // name: 'default-name',
          // placeholder: 'Insert text here',
        },
        traits: ['href', 'title'],
        // styles: `
        //     .g-link-block: { background-color: brown; }
        // `,
        droppable: (el: BlockProperties): boolean => {
          const type = el?.attributes?.type;
          if (type === 'link-block' || type === 'link' || !el?.attributes?.inlineComponent) {
            return false;
          }
          console.log(el);
          // console.log(this);
          return true;
        },
      },
    },
    view: {
      // contents: 'Hello world!!!',
      editable: true,
      // style: { width: '100px', height: '100px', 'background-color': 'red' },
    },
  });
};

export default linkBlock;
