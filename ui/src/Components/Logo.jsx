import {
  Box,
  Button,
  Center,
  Flex,
  Heading,
  useColorModeValue,
} from '@chakra-ui/react';
import React from 'react';

const Logo = () => {
  const color = useColorModeValue('blackAlpha.900', 'white');
  return (
    <Flex fontWeight={950} fontSize={'2xl'} letterSpacing={2} margin={2}>
      <Box padding={1} color={color}>
        {/* Noit */}
        {/* Ydi */}
        Dy
      </Box>
      <Center
        rounded={'md'}
        paddingX={1}
        color={'blackAlpha.900'}
        bgColor="brand"
      >
        {/* cele */}
        {/* fih */}
        fihi
      </Center>
    </Flex>
  );
};

export default Logo;
