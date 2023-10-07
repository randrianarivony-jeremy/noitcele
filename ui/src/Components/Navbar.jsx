import { Flex, useColorModeValue } from '@chakra-ui/react';
import React from 'react';
import Logo from './Logo';
import { ColorModeSwitcher } from './ColorModeSwitcher';

const Navbar = () => {
  const bgColor = useColorModeValue('white', 'blackAlpha.900');
  const borderColor = useColorModeValue('blackAlpha.900', 'white');
  return (
    <Flex
      position={'sticky'}
      top={0}
      bgColor={bgColor}
      scale={0.5}
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
