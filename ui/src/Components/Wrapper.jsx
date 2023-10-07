import { Heading, Stack, Text } from '@chakra-ui/react';
import React, { useContext } from 'react';
import { appContext } from '../Context/Context';

const Wrapper = (Component, idName, stage) =>
  function HOC() {
    const { height } = useContext(appContext);
    return (
      <Stack id={idName} minH={height - 95} paddingTop={14}>
        <Heading size={'md'} paddingY={2}>
          {stage}
        </Heading>
        <Text fontSize={'sm'}>
          Iza no tsy tianao ho lany filoham-pirenena ?
        </Text>
        <Component />
      </Stack>
    );
  };

export default Wrapper;
