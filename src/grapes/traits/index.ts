import type { Editor } from 'grapesjs/dist/index';
import tagTrait from '@/grapes/traits/tagTrait/tagTrait';

// eslint-disable-next-line no-unused-vars
const arr: Array<(editor: Editor) => void> = [tagTrait];

export default (editor: Editor) => {
  arr.forEach((el) => el(editor));
};
