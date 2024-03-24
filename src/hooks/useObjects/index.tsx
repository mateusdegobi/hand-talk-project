import { EditObject, GetObjects } from '@src/core/data/usecases/objects/';
import { GeometricObject, ObjectsType } from '@src/core/domain/entities/GeometricObject';
import { ObjectsRepository } from '@src/core/infra/repository/objects';
import { useCallback, useEffect, useRef, useState } from 'react';


const factory = (repo: ObjectsRepository) => {
  const getObjects = new GetObjects(repo);
  const editObject = new EditObject(repo);

  return { getObjects, editObject };
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

  return { objects, onEditObject };
}
