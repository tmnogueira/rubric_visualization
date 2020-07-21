import { flatData, pivotHeatMapData } from './utils';

import { testPayload } from '../test/test-payload';

const heatMapData = pivotHeatMapData(testPayload);

describe('utility functions', () => {
  it('returns true when criterion can be flattened', () => {
    const rubric = heatMapData[0].dataPoints;
    expect(flatData(rubric)).toEqual(true);
  });

  it('returns false when criterion cannot be flattened', () => {
    const rubric = heatMapData[1].dataPoints;
    expect(flatData(rubric)).toEqual(false);
  });
});
