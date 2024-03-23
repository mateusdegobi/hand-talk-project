import { darkLight } from '@constants/styles/themes/dark';
import { themeLight } from '@constants/styles/themes/light';
import { useCallback, useEffect, useMemo, useState } from 'react';
import { Appearance } from 'react-native';

import { IAppearanceProps, IColorSchemeProps, themeType } from './types';

const useAppearance = (): IAppearanceProps => {
  const [currentTheme, setCurrentTheme] = useState<themeType>(
    Appearance.getColorScheme() || 'light'
  );

  const handleChangeAppearance = useCallback(({ colorScheme }: IColorSchemeProps) => {
    if (colorScheme) {
      setCurrentTheme(colorScheme);
    }
  }, []);

  useEffect(() => {
    Appearance.addChangeListener(handleChangeAppearance);
    return () => Appearance.addChangeListener(handleChangeAppearance).remove();
  }, [handleChangeAppearance]);

  const theme = useMemo(() => {
    if (currentTheme === 'light') {
      return themeLight;
    }
    return darkLight;
  }, [currentTheme]);
  return { currentTheme, theme };
};

export default useAppearance;
