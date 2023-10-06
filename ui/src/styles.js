import { extendTheme } from '@chakra-ui/react';

const breakpoints = {
  base: '0px',
  sm: '360px',
  md: '520px',
  lg: '960px',
  xl: '1200px',
  '2xl': '1536px',
};

// 3. Extend the theme
export const theme = extendTheme({ breakpoints });
