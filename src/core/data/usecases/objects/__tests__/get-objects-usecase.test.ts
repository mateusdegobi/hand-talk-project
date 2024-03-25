import { describe, it, expect, beforeEach } from '@jest/globals';

import { ObjectsRepository } from '../../../../infra/repository/objects';
import { GetObjects } from '../get-objects.usecase';

describe('GetObjects', () => {
  let objectRepositoryMock: jest.Mocked<ObjectsRepository>;

  beforeEach(() => {
    objectRepositoryMock = {
      getObjects: jest.fn(),
    };
  });

  it('should call getObjects on the repository', async () => {
    const getObjects = new GetObjects(objectRepositoryMock);

    await getObjects.execute();

    expect(objectRepositoryMock.getObjects).toHaveBeenCalled();
  });
});
