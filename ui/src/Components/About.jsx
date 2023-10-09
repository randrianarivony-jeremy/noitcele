import {
  Heading,
  Link,
  ListItem,
  OrderedList,
  Stack,
  Text,
  UnorderedList,
} from '@chakra-ui/react';
import React, { useContext, useRef, useState } from 'react';
import { appContext } from '../Context/Context';

const About = ({ setUnderstood, setLockScroll }) => {
  const { height } = useContext(appContext);
  const [finished, setFinished] = useState(false);
  const groupStageLink = useRef();
  const groupALink = useRef();

  return (
    <Stack
      id="about"
      minH={height}
      paddingX={3}
      paddingTop={20}
      spacing={5}
      pointerEvents={finished && 'none'}
      opacity={finished ? 0.5 : 1}
    >
      <Text>
        Natao ahafantarana izay tena mamim-bahoaka ny fifidianana. Ary mba iza
        indray no be tsy tia indrindra e ?
      </Text>
      <Stack>
        <Heading size={'sm'} htmlFor="stage">
          Etape du match :
        </Heading>
        <OrderedList paddingLeft={3}>
          <ListItem>Phase de poule</ListItem>
          <ListItem>Demi-finale</ListItem>
          <ListItem>Troisième place</ListItem>
          <ListItem>Finale</ListItem>
        </OrderedList>
      </Stack>
      <Stack>
        <Heading size={'sm'}>Fandehany</Heading>
        <UnorderedList paddingLeft={3}>
          <ListItem>Indray mandeha ihany no mifidy ny tsirairay.</ListItem>
          <ListItem>
            Mihena 1 point izay tafakatra demi-finale; mihena 2 points izay
            troisième place; mihena 4 points izay 2e place; mihena 5 points izay
            champion.
          </ListItem>
          <ListItem>
            <strong>07 Novembre :</strong> Avoaka ny valim-pifidianana rehefa
            nanome ny vote-ny avy ny mpifidy rehetra. Ho hita eo ny points
            azon'ny candidats tsirairay.
          </ListItem>
        </UnorderedList>
      </Stack>
      <Text textAlign={'end'} fontSize={'xs'} fontStyle={'italic'}>
        *Mialatsiny amin'ilay vary amin'anana.
      </Text>
      <Link
        href="#all-candidates"
        paddingY={2}
        textAlign={'center'}
        rounded={'md'}
        bgColor={'brand'}
        onClick={() => {
          setFinished(true);
          setLockScroll(true);
          setUnderstood(true);
          setTimeout(() => {
            groupStageLink.current.click();
          }, 3000);
          setTimeout(() => {
            groupALink.current.click();
            setLockScroll(false);
          }, 6000);
        }}
      >
        J'ai compris
      </Link>
      <Link
        display={'none'}
        ref={groupStageLink}
        href="#group-stage-onboarding"
      />
      <Link display={'none'} ref={groupALink} href="#group-A" />
    </Stack>
  );
};

export default About;
