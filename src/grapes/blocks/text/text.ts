import link from '@/grapes/blocks/text/link/link';
import type { BlockProperties } from 'grapesjs';
import textBlock from '@/grapes/blocks/text/textBlock/textBlock';
import headingBlock from '@/grapes/blocks/text/headingBlock/headingBlock';

const textBlockArray: Array<BlockProperties> = [link, textBlock, headingBlock];

export default textBlockArray;
