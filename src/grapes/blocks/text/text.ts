import link from '@/grapes/blocks/text/link/link';
import type { BlockProperties } from 'grapesjs';
import paragraphBlock from '@/grapes/blocks/text/paragraphBlock/paragraphBlock';
import headingBlock from '@/grapes/blocks/text/headingBlock/headingBlock';
import blockquoteBlock from '@/grapes/blocks/text/blockquoteBlock/blockquoteBlock';

const textBlockArray: Array<BlockProperties> = [
  link,
  paragraphBlock,
  headingBlock,
  blockquoteBlock,
];

export default textBlockArray;
