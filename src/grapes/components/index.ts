import containerComponent from '@/grapes/components/grid/container/container';
import gridContainerComponent from '@/grapes/components/grid/grid-container/grid-container';
import gridItemComponent from '@/grapes/components/grid/grid-item/grid-item';

import buttons from './buttons/buttons';
import text from './text/text';

export default [containerComponent, gridContainerComponent, gridItemComponent, ...text, ...buttons];
