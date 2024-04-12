export default {
  name: 'Decorations',
  open: false,
  buildProps: ['background', 'border', 'border-radius', 'transform'],

  properties: [
    {
      type: 'stack',
      property: 'border',
      label: 'border',
      properties: [
        { name: 'Width', type: 'number', units: ['px'], default: '0', property: 'border-width' },
        {
          name: 'Style',
          property: 'border-style',
          type: 'select',
          list: [
            { value: 'none' },
            { value: 'solid' },
            { value: 'dotted' },
            { value: 'dashed' },
            { value: 'double' },
            { value: 'groove' },
            { value: 'ridge' },
            { value: 'inset' },
            { value: 'outset' },
          ],
        },
        { name: 'Color', property: 'border-color', type: 'color' },
      ],
    },
    {
      type: 'stack',
      property: 'border-radius',
      label: 'border radius',
      properties: [
        {
          name: 'Top',
          type: 'number',
          units: ['px'],
          default: '0',
          property: 'border-top-left-radius',
        },
        {
          name: 'Right',
          property: 'border-top-right-radius',
          type: 'number',
          units: ['px'],
          default: '0',
        },
        {
          name: 'Bottom',
          property: 'border-bottom-left-radius',
          type: 'number',
          units: ['px'],
          default: '0',
        },
        {
          name: 'Left',
          property: 'border-bottom-right-radius',
          type: 'number',
          units: ['px'],
          default: '0',
        },
      ],
    },
    // {
    //   type: 'stack',
    //   property: 'transform',
    //   label: 'transform',
    //   properties:
    // },
  ],
};
