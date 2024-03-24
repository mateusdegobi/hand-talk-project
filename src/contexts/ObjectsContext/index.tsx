import { GeometricObject, ObjectsType } from '@src/core/domain/entities/GeometricObject';
import { useObjects, useAuth, useUserObjectsConfig } from '@src/hooks/';
import React, { createContext, useCallback, useContext, useEffect, useMemo } from 'react';

type ObjectsContextType = {
  objects?: ObjectsType;
  onEditObject: (keyObject: string, data: Partial<GeometricObject>) => Promise<void>;
};
export const ObjectsContext = createContext<ObjectsContextType>({
  objects: undefined,
  onEditObject: async () => {},
});

function ObjectsProvider({ children }: { children: React.ReactNode }) {
  const { objects, onEditObject } = useObjects();
  const { getConfig, setConfig } = useUserObjectsConfig();
  const { user } = useAuth();

  const mergeObjects = useCallback(async () => {
    const userUid = user?.uid;

    if (userUid) {
      const userObjects = await getConfig(userUid);

      if (userObjects) {
        for (const [key, value] of Object.entries(userObjects)) {
          await onEditObject(key, value);
        }
      }
    }
  }, [getConfig, onEditObject, user?.uid]);
  useEffect(() => {
    mergeObjects();
  }, [mergeObjects]);

  const value = useMemo(
    () => ({
      objects,
      onEditObject,
    }),
    [objects, onEditObject]
  );

  return <ObjectsContext.Provider value={value}>{children}</ObjectsContext.Provider>;
}

const useObjectsContext = () => useContext(ObjectsContext);

export { ObjectsProvider, useObjectsContext };
