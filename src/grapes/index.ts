import 'grapesjs/dist/css/grapes.min.css';
import './grapes.scss';
import pluginStyleBg from 'grapesjs-style-bg';

import grapesjs, { EditorConfig } from 'grapesjs';
import blockManager from '@/grapes/blocks/blockManager';
import type { Editor } from 'grapesjs/dist/index';

import { undoButton, undoCommands } from '@/grapes/panels/undo';
import { redoButton, redoCommands } from '@/grapes/panels/redo';

import { linkBlockComponentType } from '@/grapes/blocks/basic/linkBlock/linkBlock';
import commands from '@/grapes/commands';

import components from '@/grapes/components/index';
import traits from '@/grapes/traits/index';
import styleManager from '@/grapes/styleManager';

const editorConfig: EditorConfig = {
  canvas: {
    styles: ['./grapes.css', './app.css'],
  },
  // Indicate where to init the editor. You can also pass an HTMLElement
  container: '#gjs',
  // Get the content for the canvas directly from the element
  // As an alternative we could use: `components: '<h1>Hello World Component!</h1>'`,
  fromElement: true,
  // Size of the editor
  height: `${window.innerHeight - 42}px`,
  width: 'auto',
  // Disable the storage manager for the moment
  storageManager: {
    type: 'local', // Storage type. Available: local | remote
    autosave: true, // Store data automatically
    autoload: true, // Autoload stored data on init
    stepsBeforeSave: 1, // If autosave is enabled, indicates how many changes are necessary before the store method is triggered
    // ...
    // Default storage options
    options: {
      local: {
        /* ... */
      },
      remote: {
        /* ... */
      },
    },
  },
  // Avoid any default panel
  // panels: { defaults: [] },
  blockManager,

  layerManager: {
    appendTo: '.layers-container',
  },
  deviceManager: {
    devices: [
      {
        name: 'Desktop',
        width: '', // default size
        // active: true,
      },
      {
        name: 'Tablet',
        width: '768px', // this value will be used on canvas width
        widthMedia: '991px', // this value will be used in CSS @media
      },
      {
        name: 'Mobile',
        width: '375px', // this value will be used on canvas width
        widthMedia: '767px', // this value will be used in CSS @media
      },
    ],
  },
  // We define a default panel as a sidebar to contain layers
  panels: {
    defaults: [
      {
        id: 'layers',
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore
        el: '.panel__right',
        // Make the panel resizable
        resizable: {
          maxDim: 350,
          minDim: 200,
          tc: 0, // Top handler
          cl: 1, // Left handler
          cr: 0, // Right handler
          bc: 0, // Bottom handler
          // Being a flex child we need to change `flex-basis` property
          // instead of the `width` (default)
          keyWidth: 'flex-basis',
        },
      },
      {
        id: 'panel-devices',
        el: '.panel__devices',
        buttons: [
          {
            id: 'device-desktop',
            // eslint-disable-next-line @typescript-eslint/ban-ts-comment
            // @ts-ignore
            label:
              '<svg style="display: block; max-width:22px" viewBox="0 0 24 24">\n' +
              '            <path fill="currentColor" d="M21,16H3V4H21M21,2H3C1.89,2 1,2.89 1,4V16A2,2 0 0,0 3,18H10V20H8V22H16V20H14V18H21A2,2 0 0,0 23,16V4C23,2.89 22.1,2 21,2Z"></path>\n' +
              '        </svg>',
            command: 'set-device-desktop',
            active: true,
            // togglable: false,
          },
          {
            id: 'device-tablet',
            // eslint-disable-next-line @typescript-eslint/ban-ts-comment
            // @ts-ignore
            label:
              '<svg style="display: block; max-width:22px" viewBox="0 0 24 24">\n' +
              '            <path fill="currentColor" d="M19,18H5V6H19M21,4H3C1.89,4 1,4.89 1,6V18A2,2 0 0,0 3,20H21A2,2 0 0,0 23,18V6C23,4.89 22.1,4 21,4Z"></path>\n' +
              '        </svg>',
            command: 'set-device-tablet',
            active: true,
            // togglable: false,
          },
          {
            id: 'device-mobile',
            // eslint-disable-next-line @typescript-eslint/ban-ts-comment
            // @ts-ignore
            label:
              '<svg style="display: block; max-width:22px" viewBox="0 0 24 24">\n' +
              '            <path fill="currentColor" d="M17,19H7V5H17M17,1H7C5.89,1 5,1.89 5,3V21A2,2 0 0,0 7,23H17A2,2 0 0,0 19,21V3C19,1.89 18.1,1 17,1Z"></path>\n' +
              '        </svg>',
            command: 'set-device-mobile',
            // togglable: false,
          },
        ],
      },
      {
        id: 'basic-actions',
        el: '.panel__basic-actions',
        buttons: [
          {
            id: 'visibility',
            active: true, // active by default
            className: 'btn-toggle-borders',
            attributes: { title: 'View components' },
            // eslint-disable-next-line @typescript-eslint/ban-ts-comment
            // @ts-ignore
            label:
              '<svg style="display: block; max-width:22px" viewBox="0 0 24 24">\n' +
              '        <path fill="currentColor" d="M15,5H17V3H15M15,21H17V19H15M11,5H13V3H11M19,5H21V3H19M19,9H21V7H19M19,21H21V19H19M19,13H21V11H19M19,17H21V15H19M3,5H5V3H3M3,9H5V7H3M3,13H5V11H3M3,17H5V15H3M3,21H5V19H3M11,21H13V19H11M7,21H9V19H7M7,5H9V3H7V5Z"></path>\n' +
              '    </svg>',
            command: 'sw-visibility', // Built-in command
          },
          {
            id: 'preview',
            className: 'btn-show-full',
            attributes: { title: 'Preview' },
            // eslint-disable-next-line @typescript-eslint/ban-ts-comment
            // @ts-ignore
            label:
              '<svg style="display: block; max-width:22px" viewBox="0 0 24 24"><path fill="currentColor" d="M12,9A3,3 0 0,0 9,12A3,3 0 0,0 12,15A3,3 0 0,0 15,12A3,3 0 0,0 12,9M12,17A5,5 0 0,1 7,12A5,5 0 0,1 12,7A5,5 0 0,1 17,12A5,5 0 0,1 12,17M12,4.5C7,4.5 2.73,7.61 1,12C2.73,16.39 7,19.5 12,19.5C17,19.5 21.27,16.39 23,12C21.27,7.61 17,4.5 12,4.5Z"></path></svg>',
            // context: 'show-full',
            // id: ful,
            // command: 'set-fullscreen',
            command: 'preview', // Built-in command
          },
          {
            id: 'show-full',
            className: 'btn-show-full',
            attributes: { title: 'Fullscreen' },
            // eslint-disable-next-line @typescript-eslint/ban-ts-comment
            // @ts-ignore
            label:
              '<svg style="display: block; max-width:22px" viewBox="0 0 24 24">\n' +
              '            <path fill="currentColor" d="M5,5H10V7H7V10H5V5M14,5H19V10H17V7H14V5M17,14H19V19H14V17H17V14M10,17V19H5V14H7V17H10Z"></path>\n' +
              '        </svg>',
            // context: 'show-full',
            // id: ful,
            // command: 'set-fullscreen',
            command: 'fullscreen', // Built-in command
          },
          {
            id: 'export',
            className: 'btn-open-export',
            attributes: { title: 'View code' },
            // eslint-disable-next-line @typescript-eslint/ban-ts-comment
            // @ts-ignore
            label:
              '<svg style="display: block; max-width:22px" viewBox="0 0 24 24">\n' +
              '            <path fill="currentColor" d="M12.89,3L14.85,3.4L11.11,21L9.15,20.6L12.89,3M19.59,12L16,8.41V5.58L22.42,12L16,18.41V15.58L19.59,12M1.58,12L8,5.58V8.41L4.41,12L8,15.58V18.41L1.58,12Z"></path>\n' +
              '        </svg>',
            command: 'export-template',
            context: 'export-template', // For grouping context of buttons from the same panel
          },
          {
            ...undoButton,
          },
          {
            ...redoButton,
          },
          // {
          //   id: 'canvas-clear',
          //   className: 'btn-canvas-clear',
          //   attributes: { title: 'Clear canvas' },
          //   // eslint-disable-next-line @typescript-eslint/ban-ts-comment
          //   // @ts-ignore
          //   label:
          //     '<svg style="display: block; max-width:22px" viewBox="0 0 24 24">\n' +
          //     '              <path fill="currentColor" d="M19,4H15.5L14.5,3H9.5L8.5,4H5V6H19M6,19A2,2 0 0,0 8,21H16A2,2 0 0,0 18,19V7H6V19Z"></path>\n' +
          //     '          </svg>',
          //   command: 'canvas-clear',
          //   context: 'canvas-clear', // For grouping context of buttons from the same panel
          // },
        ],
      },
      {
        id: 'panel-switcher',
        el: '.panel__switcher',
        buttons: [
          {
            id: 'show-layers',
            active: true,
            attributes: { title: 'Open Layer Manager' },
            // eslint-disable-next-line @typescript-eslint/ban-ts-comment
            // @ts-ignore
            label:
              '<svg style="display: block; max-width:22px" viewBox="0 0 24 24">\n' +
              '          <path fill="currentColor" d="M12,16L19.36,10.27L21,9L12,2L3,9L4.63,10.27M12,18.54L4.62,12.81L3,14.07L12,21.07L21,14.07L19.37,12.8L12,18.54Z"></path>\n' +
              '      </svg>',
            command: 'show-layers',
            // Once activated disable the possibility to turn it off
            togglable: false,
          },
          {
            id: 'show-traits',
            active: true,
            // eslint-disable-next-line @typescript-eslint/ban-ts-comment
            // @ts-ignore
            label: `<svg style="display: block; max-width:22px" viewBox="0 0 24 24">
                <path fill="currentColor" d="M12,15.5A3.5,3.5 0 0,1 8.5,12A3.5,3.5 0 0,1 12,8.5A3.5,3.5 0 0,1 15.5,12A3.5,3.5 0 0,1 12,15.5M19.43,12.97C19.47,12.65 19.5,12.33 19.5,12C19.5,11.67 19.47,11.34 19.43,11L21.54,9.37C21.73,9.22 21.78,8.95 21.66,8.73L19.66,5.27C19.54,5.05 19.27,4.96 19.05,5.05L16.56,6.05C16.04,5.66 15.5,5.32 14.87,5.07L14.5,2.42C14.46,2.18 14.25,2 14,2H10C9.75,2 9.54,2.18 9.5,2.42L9.13,5.07C8.5,5.32 7.96,5.66 7.44,6.05L4.95,5.05C4.73,4.96 4.46,5.05 4.34,5.27L2.34,8.73C2.21,8.95 2.27,9.22 2.46,9.37L4.57,11C4.53,11.34 4.5,11.67 4.5,12C4.5,12.33 4.53,12.65 4.57,12.97L2.46,14.63C2.27,14.78 2.21,15.05 2.34,15.27L4.34,18.73C4.46,18.95 4.73,19.03 4.95,18.95L7.44,17.94C7.96,18.34 8.5,18.68 9.13,18.93L9.5,21.58C9.54,21.82 9.75,22 10,22H14C14.25,22 14.46,21.82 14.5,21.58L14.87,18.93C15.5,18.67 16.04,18.34 16.56,17.94L19.05,18.95C19.27,19.03 19.54,18.95 19.66,18.73L21.66,15.27C21.78,15.05 21.73,14.78 21.54,14.63L19.43,12.97Z"></path>
            </svg>`,
            command: 'show-traits',
            togglable: false,
          },
          {
            id: 'show-style',
            active: true,
            attributes: { title: 'Open Style Manager' },
            // eslint-disable-next-line @typescript-eslint/ban-ts-comment
            // @ts-ignore
            label:
              '<svg style="display: block; max-width:22px" viewBox="0 0 24 24">\n' +
              '            <path fill="currentColor" d="M20.71,4.63L19.37,3.29C19,2.9 18.35,2.9 17.96,3.29L9,12.25L11.75,15L20.71,6.04C21.1,5.65 21.1,5 20.71,4.63M7,14A3,3 0 0,0 4,17C4,18.31 2.84,19 2,19C2.92,20.22 4.5,21 6,21A4,4 0 0,0 10,17A3,3 0 0,0 7,14Z"></path>\n' +
              '        </svg>',
            command: 'show-styles',
            togglable: false,
          },
          {
            id: 'show-blocks',
            active: true,
            attributes: { title: 'Open Blocks' },
            // eslint-disable-next-line @typescript-eslint/ban-ts-comment
            // @ts-ignore
            label:
              '<svg style="display: block; max-width:22px" viewBox="0 0 24 24">\n' +
              '          <path fill="currentColor" d="M17,13H13V17H11V13H7V11H11V7H13V11H17M19,3H5C3.89,3 3,3.89 3,5V19A2,2 0 0,0 5,21H19A2,2 0 0,0 21,19V5C21,3.89 20.1,3 19,3Z"></path>\n' +
              '      </svg>',
            command: 'show-blocks',
            togglable: false,
          },
        ],
      },
    ],
  },
  selectorManager: {
    appendTo: '.styles-container',
    componentFirst: true,
  },
  styleManager,
  commands: {
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    defaults: [
      ...undoCommands,
      ...redoCommands,
      // {
      //   id: 'undo',
      //   run: function (editor2, sender) {
      //     sender.set('active', false);
      //     // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      //     // @ts-ignore
      //     editor2.UndoManager.undo(1);
      //   },
      // },
    ],
  },
  traitManager: {
    appendTo: '.traits-container',
  },
  plugins: [pluginStyleBg, linkBlockComponentType, ...components],
  pluginsOpts: {
    'grapesjs-style-bg': {
      styleGradientOpts: {
        // styleType: 'color',
        colorPicker: 'default',
        grapickOpts: {
          min: 1,
          max: 99,
        },
      },
    },
  },
};

const editor: Editor = grapesjs.init(editorConfig);

commands(editor);

traits(editor);

// console.log(editor.StyleManager.getBuiltIn('display'));
// console.log(editor.StyleManager.getBuiltInAll());

export default editor;
