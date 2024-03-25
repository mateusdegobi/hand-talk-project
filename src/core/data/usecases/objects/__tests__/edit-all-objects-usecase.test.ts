import { describe, it, expect, beforeEach } from '@jest/globals';

import { ObjectsRepository } from '../../../../infra/repository/objects';
import { EditAllObjects } from '../edit-all-objects.usecase';

describe('EditAllObjects', () => {
  let objectRepositoryMock: jest.Mocked<ObjectsRepository>;

  beforeEach(() => {
    objectRepositoryMock = {
      editAllObjects: jest.fn(),
    };
  });

  it('should call editAllObjects on the repository with the correct parameters', async () => {
    const editAllObjects = new EditAllObjects(objectRepositoryMock);
    const objects = [
      { id: '1', name: 'Object 1' },
      { id: '2', name: 'Object 2' },
    ];

    await editAllObjects.execute(objects);

    expect(objectRepositoryMock.editAllObjects).toHaveBeenCalledWith(objects);
  });
});
