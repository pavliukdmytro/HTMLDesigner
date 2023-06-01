import type { Editor } from 'grapesjs/dist/index';

export const redoButton = {
  id: 'redo',
  className: 'btn-show-redo',
  attributes: { title: 'Redo' },
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  label:
    '<svg style="display: block; max-width:22px" viewBox="0 0 24 24">\n' +
    '            <path fill="currentColor" d="M10.5 18H18V20H10.5C6.91 20 4 17.09 4 13.5S6.91 7 10.5 7H16.17L13.08 3.91L14.5 2.5L20 8L14.5 13.5L13.09 12.09L16.17 9H10.5C8 9 6 11 6 13.5S8 18 10.5 18Z"></path>\n' +
    '        </svg>',
  command: 'redo',
};

export const redoCommands = [
  {
    id: 'redo',
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    run: function (editor: Editor, sender) {
      sender.set('active', false);
      editor.UndoManager.redo(true);
    },
  },
];
