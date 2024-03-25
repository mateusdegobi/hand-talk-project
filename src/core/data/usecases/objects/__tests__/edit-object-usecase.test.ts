import { describe, it, expect, beforeEach } from '@jest/globals';

import { GeometricObject } from '../../../../domain/entities/GeometricObject';
import { ObjectsRepository } from '../../../../infra/repository/objects';
import { EditObject } from '../edit-object.usecase';

describe('EditObject', () => {
  let objectsContractMock: jest.Mocked<ObjectsRepository>;

  beforeEach(() => {
    objectsContractMock = {
      editObject: jest.fn(),
    };
  });

  it('should call editObject on the repository with the correct parameters', async () => {
    const editObject = new EditObject(objectsContractMock);
    const keyObject = '1';
    const objectValue: Partial<GeometricObject> = { color: 'red' };

    await editObject.execute(keyObject, objectValue);

    expect(objectsContractMock.editObject).toHaveBeenCalledWith(keyObject, objectValue);
  });
});
