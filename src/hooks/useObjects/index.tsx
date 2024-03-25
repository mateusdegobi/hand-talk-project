import { GeometricObjectUserData } from '@src/core/data/contracts';
import { EditObject, GetObjects } from '@src/core/data/usecases/objects/';
import { EditAllObjects } from '@src/core/data/usecases/objects/edit-all-objects.usecase';
import { GeometricObject, ObjectsType } from '@src/core/domain/entities/GeometricObject';
import { ObjectsRepository } from '@src/core/infra/repository/objects';
import { useCallback, useEffect, useRef, useState } from 'react';

const factory = (repo: ObjectsRepository) => {
  const getObjects = new GetObjects(repo);
  const editObject = new EditObject(repo);
  const editAllObjects = new EditAllObjects(repo);

  return { getObjects, editObject, editAllObjects };
};

export function useObjects() {
  const [objects, setObjects] = useState<ObjectsType>();

  const repo = useRef(new ObjectsRepository()).current;

  const onGetObjects = useCallback(async () => {
    const { getObjects } = factory(repo);
    const objectsData = await getObjects.execute();

    setObjects((curr) => ({
      ...curr,
      ...objectsData,
    }));
  }, [repo]);

  useEffect(() => {
    onGetObjects();
  }, [onGetObjects]);

  const onEditObject = useCallback(
    async (objectKey: string, objectValue: Partial<GeometricObject>) => {
      const { editObject } = factory(repo);
      await editObject.execute(objectKey, objectValue);
      await onGetObjects();
    },
    [repo, onGetObjects]
  );

  const onEditAllObjects = useCallback(
    async (newObjects: GeometricObjectUserData) => {
      const { editAllObjects } = factory(repo);
      await editAllObjects.execute(newObjects);
      await onGetObjects();
    },
    [onGetObjects, repo]
  );

  return { objects, onEditObject, onEditAllObjects };
}
