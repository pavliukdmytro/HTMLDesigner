import link from '@/grapes/blocks/text/link/link';
import type { BlockProperties } from 'grapesjs';
import paragraphBlock from '@/grapes/blocks/text/paragraphBlock/paragraphBlock';
import headingBlock from '@/grapes/blocks/text/headingBlock/headingBlock';

const textBlockArray: Array<BlockProperties> = [link, paragraphBlock, headingBlock];

export default textBlockArray;
