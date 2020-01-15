import React from 'react';
import { storiesOf } from '@storybook/react';
import { select } from '@storybook/addon-knobs';

import Grid, { GridCell } from './Grid';

const GridExample = () => {
  const columnCount: 1 | 2 | 3 = select('column count', [1, 2, 3], 3);

  /**
   * Creates an array of GridCell components based
   * on the given columnCount from the Storybook select knob.
   *
   * @return {array} - array of React Components
   */
  const createGridCells = () => {
    const cells = [];

    for (let i: 1 = 1; i <= columnCount; i += 1) {
      cells.push(
        <GridCell column={i} columnCount={columnCount}>
          <div className="st-grid-cell-visualiser">
            {`Grid Cell ${i} of ${columnCount}`}
          </div>
        </GridCell>
      );
    }

    return cells;
  };

  return <Grid>{createGridCells()}</Grid>;
};

const stories = storiesOf('Components|Grid', module);

stories.add('Grid', GridExample);
