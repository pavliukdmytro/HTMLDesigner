export default {
  name: 'Decorations',
  open: false,
  buildProps: [
    'background-color',
    // 'container-background-color',
    'background-url',
    'background-repeat',
    'background-size',
    'border-radius',
    'border',
  ],
  properties: [
    // {
    //   name: 'Background color',
    //   property: 'container-background-color',
    //   type: 'color',
    // },
    {
      property: 'background-url',
      type: 'file',
    },
    {
      property: 'border-radius',
      properties: [
        { name: 'Top', property: 'border-top-left-radius' },
        { name: 'Right', property: 'border-top-right-radius' },
        { name: 'Bottom', property: 'border-bottom-left-radius' },
        { name: 'Left', property: 'border-bottom-right-radius' },
      ],
    },
    {
      property: 'border-detached',
      name: 'Border detached',
      type: 'composite',
      detached: true,
      properties: [
        { name: 'Width', property: 'border-width', type: 'integer', units: ['px', '%'] },
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
  ],
};
