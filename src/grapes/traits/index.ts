import type { Editor } from 'grapesjs/dist/index';
import tagTrait from '@/grapes/traits/tagTrait/tagTrait';
import styleSelectTrait from '@/grapes/traits/styleSelectTrait/styleSelectTrait';
import styleInputTrait from '@/grapes/traits/styleInputTrait/styleInputTrait';

// eslint-disable-next-line no-unused-vars
const arr: Array<(editor: Editor) => void> = [tagTrait, styleSelectTrait, styleInputTrait];

export default (editor: Editor) => {
  arr.forEach((el) => el(editor));
};
