import type { ComponentProperties, Editor } from 'grapesjs';

const containerComponentType = 'grid-item';

const gridItemComponent = (editor: Editor) => {
  editor.DomComponents.addType(containerComponentType, {
    // Make the editor understand when to bind `my-input-type`
    // isComponent: (el) => el.tagName === 'INPUT',
    // Model definition
    model: {
      // Default properties
      defaults: {
        tagName: 'div',
        attributes: { class: 'grid-item' },
        // draggable: 'form, form *', // Can be dropped only inside `form` elements
        // droppable: false, // Can't drop other elements inside
        // styles: `.grid-container {display: grid;}`,
        // style: {
        // display: 'grid',
        //   width: '100px',
        //   height: '100px',
        //   background: 'red',
        // },

        traits: [
          {
            type: 'select',
            name: 'alignSelf',
            label: 'align Y',
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
          {
            type: 'select',
            name: 'justifySelf',
            label: 'align X',
            changeProp: true,
            default: 'stretch',
            // category: categoryMobile,
            options: [
              { value: 'stretch', name: 'stretch' },
              { value: 'start', name: 'start' },
              { value: 'center', name: 'center' },
              { value: 'end', name: 'end' },
            ],
          },
          {
            type: 'select',
            name: 'columnSize',
            label: 'column size',
            changeProp: true,
            default: 1,
            // category: categoryMobile,
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
        ],
      },
      init() {
        // Also the listener changes from `change:attributes:*` to `change:*`
        // @ts-ignore
        this.on('change:alignSelf', this.handlerChangeAlignSelf);
        // @ts-ignore
        this.on('change:justifySelf', this.handlerChangeJustifySelf);
        // @ts-ignore
        this.on('change:columnSize', this.handlerChangeGridColumn);
      },
      changeStyle(styleObj: { [name: string]: string }) {
        // @ts-ignore
        editor.StyleManager.addStyleTargets(styleObj);
      },
      handlerChangeAlignSelf(component: ComponentProperties, value: string) {
        this.changeStyle({
          'align-self': value,
        });
      },
      handlerChangeJustifySelf(component: ComponentProperties, value: string) {
        this.changeStyle({
          'justify-self': value,
        });
      },
      handlerChangeGridColumn(component: ComponentProperties, value: string) {
        this.changeStyle({
          'grid-column': `span ${value}`,
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
        if (getStyle('align-self')) {
          getTraitElement('alignSelf').setValue(getStyle('align-self'));
        } else {
          getTraitElement('alignSelf').setValue('initial');
        }
        if (getStyle('justify-self')) {
          // console.log(getStyle('justify-self'));
          getTraitElement('justifySelf').setValue(getStyle('justify-self'));
        } else {
          getTraitElement('justifySelf').setValue('stretch');
        }

        if (getStyle('grid-column')) {
          getTraitElement('columnSize').setValue(`${getNumberFromString(getStyle('grid-column'))}`);
        } else {
          getTraitElement('columnSize').setValue(1);
        }
      }, 4);
    }
  };

  editor.on('change:device', setProps);
  editor.on('component:selected', setProps);
};

export default gridItemComponent;
