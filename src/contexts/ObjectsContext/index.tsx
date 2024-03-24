import { GeometricObject, ObjectsType } from '@src/core/domain/entities/GeometricObject';
import useObjects from '@src/hooks/useObjects/useObjects';
import React, { createContext, useContext, useEffect, useMemo } from 'react';

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
