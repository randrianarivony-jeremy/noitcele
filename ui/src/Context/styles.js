import { extendTheme } from '@chakra-ui/react';

import { mode } from '@chakra-ui/theme-tools';
const breakpoints = {
  base: '0px',
  sm: '360px',
  md: '520px',
  lg: '760px',
  xl: '1200px',
  '2xl': '1536px',
};
const config = {
  initialColorMode: 'dark',
  useSystemColorMode: false,
};

// 3. Extend the theme
export const theme = extendTheme({
  breakpoints,
  config,
  colors: {
    brand: '#ffa500',
  },
  styles: {
    global: props => ({
      body: {
        fontFamily: 'body',
        bg: mode('white', 'blackAlpha.900')(props),
      },
    }),
  },
});
