export default {
  name: 'Display',
  open: false,
  buildProps: [
    'display',
    'flex-direction',
    'align-items',
    'justify-content',
    'order',
    'align-self',
    // 'justify-self',
    'flex-wrap',
    'flex-grow',
  ],
  properties: [
    {
      id: 'display',
      name: 'display',
      property: 'display',
      type: 'select',
      defaults: 'none',
      // List of options, available only for 'select' and 'radio'  types
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore
      options: [
        { value: 'block', name: 'block' },
        { value: 'inline', name: 'inline' },
        { value: 'inline-block', name: 'inline-block' },
        { value: 'flex', name: 'flex' },
        { value: 'inline-flex', name: 'inline-flex' },
        { value: 'grid', name: 'grid' },
        { value: 'inline-grid', name: 'inline-grid' },
      ],
    },
    // {
    //   id: 'justify-self',
    //   name: 'justify-self',
    //   property: 'justify-self',
    //   type: 'select',
    //   defaults: 'none',
    //   // requiresParent: { display: ['flex'] },
    //   // List of options, available only for 'select' and 'radio'  types
    //   // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    //   // @ts-ignore
    //   options: [
    //     { value: 'stretch', name: 'stretch' },
    //     { value: 'center', name: 'center' },
    //     { value: 'start', name: 'start' },
    //     { value: 'end', name: 'end' },
    //   ],
    // },
  ],
};
