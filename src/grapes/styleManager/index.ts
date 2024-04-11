import display from '@/grapes/styleManager/display';
import decorations from '@/grapes/styleManager/decorations';

export default {
  appendTo: '.styles-container',
  sectors: [
    {
      name: 'Dimension',
      open: false,
      // Use built-in properties
      buildProps: ['width', 'height', 'padding', 'margin'],
      // Use `properties` to define/override single property
      properties: [
        {
          // Type of the input,
          // options: integer | radio | select | color | slider | file | composite | stack
          type: 'integer',
          name: 'The width', // Label for the property
          property: 'width', // CSS property (if buildProps contains it will be extended)
          // eslint-disable-next-line @typescript-eslint/ban-ts-comment
          // @ts-ignore
          units: ['px', '%'], // Units, available only for 'integer' types
          defaults: 'auto', // Default value
          min: 0, // Min value, available only for 'integer' types
        },
      ],
    },
    {
      name: 'Extra',
      open: false,
      buildProps: ['background-color', 'box-shadow', 'custom-prop', 'color'],
      properties: [
        {
          id: 'custom-prop',
          name: 'Custom Label',
          property: 'font-size',
          type: 'select',
          defaults: '32px',
          // List of options, available only for 'select' and 'radio'  types
          // eslint-disable-next-line @typescript-eslint/ban-ts-comment
          // @ts-ignore
          options: [
            { value: '12px', name: 'Tiny' },
            { value: '18px', name: 'Medium' },
            { value: '32px', name: 'Big' },
          ],
        },
      ],
    },
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
  ],
};
