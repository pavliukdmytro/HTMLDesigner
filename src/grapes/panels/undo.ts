import type { Editor } from 'grapesjs/dist/index';

export const undoButton = {
  id: 'show-undo',
  className: 'btn-show-undo',
  attributes: { title: 'Undo' },
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  label:
    '<svg style="display: block; max-width:22px" viewBox="0 0 24 24">\n' +
    '<path fill="currentColor" d="M20 13.5C20 17.09 17.09 20 13.5 20H6V18H13.5C16 18 18 16 18 13.5S16 9 13.5 9H7.83L10.91 12.09L9.5 13.5L4 8L9.5 2.5L10.92 3.91L7.83 7H13.5C17.09 7 20 9.91 20 13.5Z"></path>\n' +
    '</svg>',
  command: 'undo',
};

export const undoCommands = [
  {
    id: 'undo',
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    run: function (editor: Editor, sender) {
      console.log(editor, sender);
      sender.set('active', false);
      editor.UndoManager.undo(true);
    },
  },
];
