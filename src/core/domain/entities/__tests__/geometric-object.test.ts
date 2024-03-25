import { describe, it, expect } from '@jest/globals';

import { GeometricObject, ShapeType } from '../GeometricObject';

describe('GeometricObject', () => {
  it('should create a geometric object with the correct properties', () => {
    const geometricObject = new GeometricObject({
      color: 'red',
      position: [0, 0, 0],
      rotation: 0,
      shape: 'cube' as ShapeType,
    });

    expect(geometricObject.color).toBe('red');
    expect(geometricObject.position).toEqual([0, 0, 0]);
    expect(geometricObject.rotation).toBe(0);
    expect(geometricObject.shape).toBe('cube');
  });
});
