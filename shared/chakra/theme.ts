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
    colors: {
      'gray.dark': '#1C1C1C',
      'gray.light': '#646464',
      'brand.red': '#E14949',
    },
    fonts: {
      heading: `Slabo 27px, ${base.fonts?.heading}`,
      body: `Slabo 27px, ${base.fonts?.body}`,
    },
  },
  withDefaultVariant({
    variant: 'ghost',
    components: ['Button', 'IconButton'],
  }),
);
