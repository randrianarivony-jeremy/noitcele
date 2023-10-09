import { Box, Button, Center, Link, Stack, useToast } from '@chakra-ui/react';
import React, { useContext, useEffect, useRef, useState } from 'react';
import { appContext } from '../Context/Context';
import ThirdDashboard from './ThirdDashboard';

const ThirdPlace = () => {
  const { thirdPlace, height, setFinal } = useContext(appContext);
  const [finished, setFinished] = useState(false);
  const thirdOnboardingLink = useRef();
  const thirdLink = useRef();
  const toast = useToast();

  useEffect(() => {
    thirdOnboardingLink.current.click();
    setTimeout(() => {
      thirdLink.current.click();
    }, 3000);
  }, []);

  return (
    <Box
      pointerEvents={finished && 'none'}
      opacity={finished ? 0.5 : 1}
      paddingX={3}
      paddingY={2}
    >
      <Center
        height={height}
        id="third-onboarding"
        fontSize={'2xl'}
        fontWeight={'bold'}
      >
        <Center
          width={'90%'}
          height={'75%'}
          borderY={'1px solid'}
          borderColor={'blackAlpha.500'}
        >
          Troisième place
        </Center>
      </Center>

      <Stack spacing={10}>
        <ThirdDashboard />
        <Button
          id="third-submit"
          bgColor={thirdPlace !== undefined && 'brand'}
          onClick={() => {
            if (thirdPlace === undefined)
              return toast({
                status: 'error',
                description: 'Vote incomplet',
                isClosable: true,
                position: 'top',
              });
            setFinal(true);
            setFinished(true);
          }}
          color={'blackAlpha.900'}
        >
          {finished ? 'Validé' : 'Valider'}
        </Button>

        <Link
          display={'none'}
          ref={thirdOnboardingLink}
          href="#third-onboarding"
        />
        <Link display={'none'} ref={thirdLink} href="#third" />
      </Stack>
    </Box>
  );
};

export default ThirdPlace;
