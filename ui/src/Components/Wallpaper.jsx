import { Center, Text } from '@chakra-ui/react';
import React, { useContext } from 'react';
import { appContext } from '../Context/Context';
import Logo from './Logo';

const Wallpaper = () => {
  const { height } = useContext(appContext);
  return (
    <Center
      width={'100%'}
      height={height}
      flexDir="column"
      borderBottom={'0.5px solid rgba(0,0,0,0.36)'}
    >
      <Logo />
      <Text fontSize="sm" fontStyle={'italic'}>
        Ataovy mivadika e !
      </Text>
    </Center>
  );
};

export default Wallpaper;
