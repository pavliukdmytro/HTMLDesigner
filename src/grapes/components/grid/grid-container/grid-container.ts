import type { Editor, ComponentProperties } from 'grapesjs';

import styles from './grid-container.m.scss';

const containerComponentType = 'grid-container';

const gridContainerComponent = (editor: Editor) => {
  editor.DomComponents.addType(containerComponentType, {
    // Make the editor understand when to bind `my-input-type`
    // isComponent: (el) => el.tagName === 'INPUT',
    // Model definition
    model: {
      // Default properties
      defaults: {
        tagName: 'div',
        attributes: { class: 'grid-container' },
        // draggable: 'form, form *', // Can be dropped only inside `form` elements
        // droppable: false, // Can't drop other elements inside
        styles,
        traits(component: ComponentProperties) {
          return [
            {
              type: 'select',
              name: 'column',
              label: 'column',
              changeProp: true,
              default: +(component.getStyle('grid-template-columns')?.match(/[0-9]/)[0] ?? 1),
              // value: +(component.getStyle('grid-template-columns')?.match(/[0-9]/)[0] ?? 1),
              options: [
                { value: 1, name: 'col 1' },
                { value: 2, name: 'col 2' },
                { value: 3, name: 'col 3' },
                { value: 4, name: 'col 4' },
                { value: 5, name: 'col 5' },
                { value: 6, name: 'col 6' },
                { value: 7, name: 'col 7' },
                { value: 8, name: 'col 8' },
                { value: 9, name: 'col 9' },
                { value: 10, name: 'col 10' },
                { value: 11, name: 'col 11' },
                { value: 12, name: 'col 12' },
              ],
            },
            {
              type: 'number',
              name: 'rowGap',
              label: 'row gap',
              placeholder: '0px',
              changeProp: true,
              // default: '100',
              // value: '300',
              min: 0, // Minimum number value
              // units: ['px'],
              // max: 100, // Maximum number value
              step: 1, // Number of steps
            },
            {
              type: 'number',
              name: 'columnGap',
              label: 'column gap',
              placeholder: '0px',
              changeProp: true,
              default: 0,
              value: 15,
              // units: ['px'],
              min: 0, // Minimum number value
              // max: 100, // Maximum number value
              step: 1, // Number of steps
            },
            {
              type: 'select',
              name: 'alignItems',
              label: 'vertical align',
              changeProp: true,
              default: 'initial',
              // category: categoryMobile,
              options: [
                { value: 'initial', name: 'initial' },
                { value: 'flex-start', name: 'start' },
                { value: 'center', name: 'center' },
                { value: 'flex-end', name: 'end' },
              ],
            },
          ];
        },
      },
      init() {
        // Also the listener changes from `change:attributes:*` to `change:*`
        // @ts-ignore
        this.on('change:column', this.handlerChangeColumn);
        // @ts-ignore
        this.on('change:rowGap', this.handlerChangeRowGap);
        // @ts-ignore
        this.on('change:columnGap', this.handlerChangeColumnGap);
        // @ts-ignore
        this.on('change:alignItems', this.handlerChangeAlignItems);
      },
      changeStyle(styleObj: { [name: string]: string }) {
        // @ts-ignore
        editor.StyleManager.addStyleTargets(styleObj);
      },
      handlerChangeColumn(component: ComponentProperties, value: string) {
        this.changeStyle({
          'grid-template-columns': `repeat(${value}, minmax(0, 1fr))`,
        });
      },
      handlerChangeRowGap(component: ComponentProperties, value: string) {
        console.log(value);
        this.changeStyle({
          'grid-row-gap': `${value}`,
        });
      },
      handlerChangeColumnGap(component: ComponentProperties, value: string) {
        this.changeStyle({
          'grid-column-gap': `${value}px`,
        });
      },
      handlerChangeAlignItems(component: ComponentProperties, value: string) {
        this.changeStyle({
          'align-items': `${value}`,
        });
      },
    },
  });

  const getStyle = (style: string) => editor.StyleManager.getSelected()?.attributes?.style?.[style];
  // @ts-ignore
  const getTraitElement = (name: string) => editor.getSelected().get('traits').where({ name })[0];
  const getNumberFromString = (str: string): number => +(str?.match(/[0-9]/g)?.join('') || 0);

  const setProps = () => {
    if (editor.getSelected()?.getName()?.toLowerCase() === containerComponentType) {
      setTimeout(() => {
        if (getStyle('grid-template-columns')) {
          getTraitElement('column').setValue(+getStyle('grid-template-columns').match(/[0-9]/)[0]);
        } else {
          getTraitElement('column').setValue(1);
        }

        if (getStyle('grid-row-gap')) {
          getTraitElement('rowGap').setValue(getNumberFromString(getStyle('grid-row-gap')));
        } else {
          getTraitElement('rowGap').setValue(0);
        }

        if (getStyle('grid-column-gap')) {
          getTraitElement('columnGap').setValue(getNumberFromString(getStyle('grid-column-gap')));
        } else {
          getTraitElement('columnGap').setValue(0);
        }
      }, 4);
    }
  };

  editor.on('change:device', setProps);
};

export default gridContainerComponent;
