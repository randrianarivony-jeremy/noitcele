import { Box, Button, Center, Link, Stack, useToast } from '@chakra-ui/react';
import React, { useContext, useEffect, useRef, useState } from 'react';
import { appContext } from '../Context/Context';
import SemifinalA from './SemifinalA';
import SemifinalB from './SemifinalB';

const Semifinal = () => {
  const { setThirdFinal, finalists, height, showSemiB } =
    useContext(appContext);
  const [finished, setFinished] = useState(false);
  const [complete, setComplete] = useState(false);
  const semifinalLink = useRef();
  const semifinalALink = useRef();
  const toast = useToast();

  const handleSubmit = () => {
    if (Object.values(finalists).includes(''))
      return toast({
        status: 'error',
        description: 'Vote incomplet',
        isClosable: true,
        position: 'top',
      });
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
    <Box
      pointerEvents={finished && 'none'}
      opacity={finished ? 0.5 : 1}
      paddingX={3}
      paddingY={2}
    >
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
        {showSemiB && <SemifinalB />}
        <Link display={'none'} ref={semifinalLink} href="#semifinal" />
        <Link display={'none'} ref={semifinalALink} href="#semi-A" />
        {showSemiB && (
          <Button
            id="semi-submit"
            bgColor={complete && 'brand'}
            onClick={handleSubmit}
            // isDisabled={!complete}
            color={'blackAlpha.900'}
          >
            {finished ? 'Validé' : 'Valider'}
          </Button>
        )}
      </Stack>
    </Box>
  );
};

export default Semifinal;
