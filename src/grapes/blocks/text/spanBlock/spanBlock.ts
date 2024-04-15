// import '@/grapes/blocks/text/link/link.scss';
import type { BlockProperties } from 'grapesjs';

const span: BlockProperties = {
  id: 'span', // id is mandatory
  category: 'text',
  label: `
    <div class="gjs-block__media">
      S
    </div>
      <div class="gjs-block-label">span</div>
    `,
  // content: {
  //   type: 'link',
  //   droppable: false,
  //   content: `<a class="g-link"  href="">Link</a>`,
  //   styles: 'color: red',
  // },
  content: `<span class="g-span"></span>`,
};

export default span;
