import type { Editor } from 'grapesjs/dist/index';

export default (editor: Editor) => {
  const { Commands } = editor;
  // Commands
  Commands.add('set-device-desktop', {
    run: (editor2: Editor) => editor2.setDevice('Desktop'),
  });
  Commands.add('set-device-tablet', {
    run: (editor2: Editor) => editor2.setDevice('Tablet'),
  });
  Commands.add('set-device-mobile', {
    run: (editor2: Editor) => editor2.setDevice('Mobile'),
  });

  Commands.add('show-layers', {
    getRowEl(editor2: Editor) {
      return editor2?.getContainer()?.closest('.editor-row');
    },
    getLayersEl(row: HTMLDivElement) {
      return row?.querySelector('.layers-container');
    },

    run(editor2: Editor) {
      const lmEl = this.getLayersEl(this.getRowEl(editor2) as HTMLDivElement);
      if (lmEl) {
        lmEl.style.display = '';
      }
    },
    stop(editor2: Editor) {
      const lmEl = this.getLayersEl(this?.getRowEl(editor2) as HTMLDivElement);
      if (lmEl) {
        lmEl.style.display = 'none';
      }
    },
  });
  Commands.add('show-styles', {
    getRowEl(editor2: Editor) {
      return editor2?.getContainer()?.closest('.editor-row');
    },
    getStyleEl(row: HTMLDivElement) {
      return row.querySelector('.styles-container');
    },

    run(editor2: Editor) {
      const smEl = this.getStyleEl(this.getRowEl(editor2) as HTMLDivElement);
      if (smEl) {
        smEl.style.display = '';
      }
    },
    stop(editor2) {
      const smEl = this.getStyleEl(this.getRowEl(editor2) as HTMLDivElement);
      if (smEl) {
        smEl.style.display = 'none';
      }
    },
  });
  Commands.add('show-blocks', {
    getRowEl(editor2: Editor) {
      return editor2?.getContainer()?.closest('.editor-row');
    },
    getStyleEl(row: HTMLDivElement) {
      return row.querySelector('#blocks');
    },

    run(editor2: Editor) {
      const smEl = this.getStyleEl(this.getRowEl(editor2) as HTMLDivElement);
      if (smEl) {
        smEl.style.display = '';
      }
    },
    stop(editor2: Editor) {
      const smEl = this.getStyleEl(this.getRowEl(editor2) as HTMLDivElement);
      if (smEl) {
        smEl.style.display = 'none';
      }
    },
  });

  Commands.add('show-traits', {
    getTraitsEl(editor2: Editor) {
      // @ts-ignore
      const row: HTMLDivElement = editor2?.getContainer()?.closest('.editor-row');
      return row?.querySelector('.traits-container');
    },
    run(editor2: Editor) {
      // @ts-ignore
      this.getTraitsEl(editor2).style.display = '';
    },
    stop(editor2: Editor) {
      // @ts-ignore
      this.getTraitsEl(editor2).style.display = 'none';
    },
  });
};
