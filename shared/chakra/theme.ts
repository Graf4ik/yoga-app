import {
  extendTheme, ThemeConfig, theme as base, withDefaultVariant,
} from '@chakra-ui/react';

const config: ThemeConfig = {
  initialColorMode: 'dark',
  useSystemColorMode: false,
};

export const theme = extendTheme(
  {
    config,
    fonts: {
      heading: `Slabo 27px, ${base.fonts?.heading}`,
      body: `Slabo 27px, ${base.fonts?.body}`,
    },
  },
);
