import { GeometricObjectUserData } from '@src/core/data/contracts';
import { ObjectsType, PartialGeometricObject } from '@src/core/domain/entities/GeometricObject';
import { useObjects, useAuth, useUserObjectsConfig } from '@src/hooks/';
import { createContext, useCallback, useContext, useEffect, useMemo, ReactNode } from 'react';

type ObjectsContextType = {
  objects?: ObjectsType;
  onEditObject: (keyObject: string, data: PartialGeometricObject | undefined) => Promise<void>;
  onEditAllObjects: (newObjects: ObjectsType) => Promise<void>;
  setConfigObjects: (newObjects: GeometricObjectUserData) => Promise<void>;
};
export const ObjectsContext = createContext<ObjectsContextType>({
  objects: undefined,
  onEditObject: async () => {},
  onEditAllObjects: async () => {},
  setConfigObjects: async () => {},
});

function ObjectsProvider({ children }: { children: ReactNode }) {
  const { objects, onEditObject, onEditAllObjects } = useObjects();
  const { getConfig, setConfig } = useUserObjectsConfig();
  const { user } = useAuth();

  const mergeObjects = useCallback(async () => {
    const userUid = user?.uid;

    if (userUid) {
      const userObjects = await getConfig(userUid);
      if (userObjects) {
        await onEditAllObjects(userObjects);
      }
    }
  }, [getConfig, onEditAllObjects, user?.uid]);

  useEffect(() => {
    mergeObjects();
  }, [mergeObjects]);

  const setConfigObjects = useCallback(
    async (newObjects: ObjectsType) => {
      const userUid = user?.uid;

      if (userUid) {
        await setConfig(userUid, newObjects);
      }
    },
    [setConfig, user?.uid]
  );

  const value = useMemo(
    () => ({
      objects,
      onEditObject,
      onEditAllObjects,
      setConfigObjects,
    }),
    [objects, onEditObject, onEditAllObjects, setConfigObjects]
  );

  return <ObjectsContext.Provider value={value}>{children}</ObjectsContext.Provider>;
}

const useObjectsContext = () => useContext(ObjectsContext);

export { ObjectsProvider, useObjectsContext };
