import {
  Box,
  Button,
  Center,
  Circle,
  Heading,
  Link,
  Stack,
  Text,
} from '@chakra-ui/react';
import React, { useContext, useEffect, useRef, useState } from 'react';
import { appContext } from '../Context';
import GroupA from './GroupA';
import GroupB from './GroupB';
import GroupC from './GroupC';
import GroupD from './GroupD';

const GroupStage = ({ groupA, groupB, groupC, groupD }) => {
  const {
    setSemifinal,
    semifinalists,
    semifinalistsA,
    semifinalistsB,
    height,
  } = useContext(appContext);
  const [complete, setComplete] = useState(false);
  const [finished, setFinished] = useState(false);
  const groupALink = useRef();

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
    setTimeout(() => {
      groupALink.current.click();
    }, 3000);
  }, []);

  useEffect(() => {
    if (Object.values(semifinalists).includes('')) setComplete(false);
    else setComplete(true);
  }, [semifinalists]);

  return (
    <Box pointerEvents={finished && 'none'} opacity={finished ? 0.5 : 1}>
      <Circle
        pos={'absolute'}
        top={2}
        right={2}
        bg={'red'}
        size={10}
        color={'white'}
      >
        <strong>-1</strong>
      </Circle>
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
        <GroupA groupA={groupA} />
        <GroupB groupB={groupB} />
        <GroupC groupC={groupC} />
        <GroupD groupD={groupD} />
        <Button
          id="group-phase-submit"
          colorScheme="messenger"
          onClick={handleSubmit}
          isDisabled={!complete}
        >
          {finished ? 'Validé' : 'Valider'}
        </Button>
        <Link display={'none'} ref={groupALink} href="#group-A" />
      </Stack>
    </Box>
  );
};

export default GroupStage;
