import { Box, Button, Center, Link, Stack } from '@chakra-ui/react';
import React, { useContext, useEffect, useRef, useState } from 'react';
import { appContext } from '../Context/Context';
import ThirdDashboard from './ThirdDashboard';

const ThirdPlace = () => {
  const { thirdPlace, height, setFinal } = useContext(appContext);
  const [finished, setFinished] = useState(false);
  const thirdOnboardingLink = useRef();
  const thirdLink = useRef();

  useEffect(() => {
    thirdOnboardingLink.current.click();
    setTimeout(() => {
      thirdLink.current.click();
    }, 3000);
  }, []);

  //   useEffect(() => console.log(thirdFinalists), [thirdFinalists]);

  return (
    <Box pointerEvents={finished && 'none'} opacity={finished ? 0.5 : 1}>
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
          bgColor="brand"
          onClick={() => {
            setFinal(true);
            setFinished(true);
          }}
          isDisabled={thirdPlace === undefined}
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
