import display from '@/grapes/styleManager/display';
import decorations from '@/grapes/styleManager/decorations';

export default {
  appendTo: '.styles-manager',
  sectors: [
    {
      name: 'Dimension',
      open: false,
      // Use built-in properties
      buildProps: [
        'width',
        'height',
        'min-width',
        'min-height',
        'max-width',
        'max-height',
        'padding',
        'margin',
      ],
      // Use `properties` to define/override single property
      properties: [
        // {
        //   // Type of the input,
        //   // options: integer | radio | select | color | slider | file | composite | stack
        //   type: 'integer',
        //   name: 'width', // Label for the property
        //   property: 'width', // CSS property (if buildProps contains it will be extended)
        //   // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        //   // @ts-ignore
        //   units: ['px', '%'], // Units, available only for 'integer' types
        //   defaults: 'auto', // Default value
        //   min: 0, // Min value, available only for 'integer' types
        // },
      ],
    },
    // {
    //   name: 'Extra',
    //   open: false,
    //   buildProps: ['custom-prop'],
    //   properties: [
    //     {
    //       id: 'custom-prop',
    //       name: 'Custom Label',
    //       property: 'font-size',
    //       type: 'select',
    //       defaults: '32px',
    //       // List of options, available only for 'select' and 'radio'  types
    //       // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    //       // @ts-ignore
    //       options: [
    //         { value: '12px', name: 'Tiny' },
    //         { value: '18px', name: 'Medium' },
    //         { value: '32px', name: 'Big' },
    //       ],
    //     },
    //   ],
    // },
    {
      name: 'typography',
      open: false,
      buildProps: [
        'font-family',
        'font-size',
        'font-weight',
        'letter-spacing',
        'font-color',
        'line-height',
        'align',
        'text-decoration',
        'font-style',
      ],
      properties: [
        {
          id: 'font-color',
          name: 'color',
          property: 'color',
          type: 'color',
        },
        {
          id: 'align',
          property: 'text-align',
          type: 'radio',
          defaults: 'left',
          list: [
            { value: 'left', name: 'Left', className: 'fa fa-align-left' },
            { value: 'center', name: 'Center', className: 'fa fa-align-center' },
            { value: 'right', name: 'Right', className: 'fa fa-align-right' },
            { value: 'justify', name: 'Justify', className: 'fa fa-align-justify' },
          ],
        },
        {
          property: 'text-decoration',
          type: 'radio',
          defaults: 'none',
          list: [
            { value: 'none', name: 'None', className: 'fa fa-times' },
            { value: 'underline', name: 'underline', className: 'fa fa-underline' },
            { value: 'line-through', name: 'Line-through', className: 'fa fa-strikethrough' },
          ],
        },
        {
          property: 'font-style',
          type: 'radio',
          defaults: 'normal',
          list: [
            { value: 'normal', name: 'Normal', className: 'fa fa-font' },
            { value: 'italic', name: 'Italic', className: 'fa fa-italic' },
          ],
        },
      ],
    },
    display,
    decorations,
    {
      name: 'Position & Transform',
      open: false,
      buildProps: [
        'position',
        'top',
        'right',
        'bottom',
        'left',
        'transform',
        'transition',
        'opacity',
        'overflow',
      ],
      properties: [
        {
          id: 'position',
          property: 'position',
          name: 'position',
          label: 'position',
          type: 'radio',
          defaults: 'static',
          list: [
            { value: 'static', name: 'static' },
            { value: 'relative', name: 'relative' },
            { value: 'absolute', name: 'absolute' },
            { value: 'fixed', name: 'fixed' },
            { value: 'sticky', name: 'sticky' },
          ],
          // @ts-ignore
          // onChange: (data) => {
          // console.log(data?.clear);
          // { property, from, to }
          // console.log(`Changed property`, property.getName(), { from, to });
          // console.log(this);
          // },
        },
        {
          id: 'top',
          name: 'top',
          property: 'top',
          type: 'number',
          label: 'top',
          // @ts-ignore
          // onChange: ({ property, from, to }) => {
          //   console.log(`Changed property`, property.getName(), { from, to });
          //   console.log(to?.visible);
          // },
          requires: {
            position: ['relative', 'absolute', 'fixed'],
          },
        },
        {
          id: 'right',
          name: 'right',
          property: 'right',
          type: 'number',
          label: 'right',
          requires: {
            position: ['relative', 'absolute', 'fixed'],
          },
        },
        {
          id: 'bottom',
          name: 'bottom',
          property: 'bottom',
          type: 'number',
          label: 'bottom',
          requires: {
            position: ['relative', 'absolute', 'fixed'],
          },
        },
        {
          id: 'left',
          name: 'left',
          property: 'left',
          type: 'number',
          label: 'left',
          requires: {
            position: ['relative', 'absolute', 'fixed'],
          },
          // requiresParent
        },
        // 'position',
        // [
        //   'top',
        //   {
        //     requires: {
        //       position: ['relative', 'absolute'],
        //     },
        //   },
        // ],
        // // 'top',
        // 'right',
        // 'bottom',
        // 'left',
      ],
    },
  ],
};
