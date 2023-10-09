import { Box, Button, Center, Stack, useToast } from '@chakra-ui/react';
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
    showGroupB,
    showGroupC,
    showGroupD,
  } = useContext(appContext);
  const [complete, setComplete] = useState(false);
  const [finished, setFinished] = useState(false);
  const toast = useToast();

  const handleSubmit = () => {
    if (Object.values(semifinalists).includes(''))
      return toast({
        status: 'error',
        description: 'Vote incomplet',
        isClosable: true,
        position: 'top',
      });
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

  return (
    <Box
      pointerEvents={finished && 'none'}
      opacity={finished ? 0.5 : 1}
      paddingX={3}
      paddingY={2}
    >
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
        {showGroupB && <GroupB />}
        {showGroupC && <GroupC />}
        {showGroupD && <GroupD />}
        {showGroupD && (
          <Button
            id="group-phase-submit"
            bgColor={complete && 'brand'}
            onClick={handleSubmit}
            color={'blackAlpha.900'}
          >
            {finished ? 'Validé' : 'Valider'}
          </Button>
        )}
      </Stack>
    </Box>
  );
};

export default GroupStage;
