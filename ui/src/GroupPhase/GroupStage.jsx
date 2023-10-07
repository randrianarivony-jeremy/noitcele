import { Box, Button, Center, Stack } from '@chakra-ui/react';
import React, { useContext, useEffect, useState } from 'react';
import { appContext } from '../Context/Context';
import GroupA from './GroupA';
import GroupB from './GroupB';
import GroupC from './GroupC';
import GroupD from './GroupD';

const GroupStage = () => {
  const {
    setSemifinal,
    semifinalists,
    semifinalistsA,
    semifinalistsB,
    height,
  } = useContext(appContext);
  const [complete, setComplete] = useState(false);
  const [finished, setFinished] = useState(false);
  const [loading, setLoading] = useState(true);

  const handleSubmit = () => {
    const total = Object.values(semifinalists);

    // S E M I  A
    if (semifinalistsA.current.length > 0) return;
    for (let i = 0; i < 2; i++) {
      const choosen = Math.floor(Math.random() * total.length);
      semifinalistsA.current.push(total[choosen]);
      total.splice(choosen, 1);
    }

    // S E M I  B
    if (semifinalistsB.current.length > 0) return;
    semifinalistsB.current = total;

    setSemifinal(true);
    setFinished(true);
  };

  useEffect(() => {
    if (Object.values(semifinalists).includes('')) setComplete(false);
    else setComplete(true);
  }, [semifinalists]);

  // if (!loading)
  return (
    <Box pointerEvents={finished && 'none'} opacity={finished ? 0.5 : 1}>
      {/* <Circle
          pos={'absolute'}
          top={2}
          right={2}
          bg={'red'}
          size={10}
          color={'white'}
        >
          <strong>-1</strong>
        </Circle> */}
      <Center
        height={height}
        id="group-stage-onboarding"
        fontSize={'2xl'}
        fontWeight={'bold'}
      >
        <Center
          width={'90%'}
          height={'75%'}
          borderY={'1px solid'}
          borderColor={'blackAlpha.500'}
        >
          Phase de poule
        </Center>
      </Center>
      <Stack spacing={10} id="group-stage">
        <GroupA />
        <GroupB />
        <GroupC />
        <GroupD />
        <Button
          id="group-phase-submit"
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

export default GroupStage;
