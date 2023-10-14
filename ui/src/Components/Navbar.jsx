import { Flex, useColorModeValue } from '@chakra-ui/react';
import React from 'react';
import { ColorModeSwitcher } from './ColorModeSwitcher';
import Logo from './Logo';

const Navbar = () => {
  const bgColor = useColorModeValue('white', 'black');
  const borderColor = useColorModeValue('blackAlpha.500', 'white');
  return (
    <Flex
      position={'sticky'}
      top={0}
      bgColor={bgColor}
      justify={'space-between'}
      borderBottom={'0.5px solid'}
      borderBottomColor={borderColor}
    >
      <Logo />
      <ColorModeSwitcher />
    </Flex>
  );
};

export default Navbar;
