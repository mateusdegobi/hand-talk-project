import {
  SetUserObjectsConfig,
  GetUserObjectsConfig,
} from '@src/core/data/usecases/userObjectsConfig';
import { ObjectsType } from '@src/core/domain/entities/GeometricObject';
import { UserObjectsConfigRepository } from '@src/core/infra/repository/firebase/user-objects-config.repository';
import { useCallback, useRef } from 'react';

const factory = (repo: UserObjectsConfigRepository) => {
  const getConfigUsecase = new GetUserObjectsConfig(repo);
  const setConfigUsecase = new SetUserObjectsConfig(repo);

  return { getConfigUsecase, setConfigUsecase };
};

export function useUserObjectsConfig() {
  const repo = useRef(new UserObjectsConfigRepository()).current;

  const getConfig = useCallback(
    async (userKey: string) => {
      const { getConfigUsecase } = factory(repo);
      return getConfigUsecase.execute(userKey);
    },
    [repo]
  );

  const setConfig = useCallback(
    async (userKey: string, config: ObjectsType) => {
      const { setConfigUsecase } = factory(repo);
      await setConfigUsecase.execute(userKey, config);
    },
    [repo]
  );

  return { getConfig, setConfig };
}
