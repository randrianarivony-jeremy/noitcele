import { Box, Button, Center, Link, Stack } from '@chakra-ui/react';
import React, { useContext, useEffect, useRef, useState } from 'react';
import { appContext } from '../Context/Context';
import SemifinalA from './SemifinalA';
import SemifinalB from './SemifinalB';

const Semifinal = () => {
  const { setThirdFinal, finalists, height } = useContext(appContext);
  const [finished, setFinished] = useState(false);
  const [complete, setComplete] = useState(false);
  const semifinalLink = useRef();
  const semifinalALink = useRef();

  const handleSubmit = () => {
    setThirdFinal(true);
    setFinished(true);
  };

  useEffect(() => {
    semifinalLink.current.click();
    setTimeout(() => {
      semifinalALink.current.click();
    }, 3000);
  }, []);

  useEffect(() => {
    if (Object.values(finalists).includes('')) setComplete(false);
    else setComplete(true);
  }, [finalists]);

  return (
    <Box pointerEvents={finished && 'none'} opacity={finished ? 0.5 : 1}>
      <Center
        height={height}
        id="semifinal"
        fontSize={'2xl'}
        fontWeight={'bold'}
      >
        <Center
          width={'90%'}
          height={'75%'}
          borderY={'1px solid'}
          borderColor={'blackAlpha.500'}
        >
          Demi-finale
        </Center>
      </Center>
      <Stack spacing={10}>
        <SemifinalA />
        <SemifinalB />
        <Link display={'none'} ref={semifinalLink} href="#semifinal" />
        <Link display={'none'} ref={semifinalALink} href="#semi-A" />
        <Button
          id="semi-submit"
          bgColor="brand"
          onClick={handleSubmit}
          isDisabled={!complete}
          color={'blackAlpha.900'}
        >
          {finished ? 'Validé' : 'Valider'}
        </Button>
      </Stack>
    </Box>
  );
};

export default Semifinal;
