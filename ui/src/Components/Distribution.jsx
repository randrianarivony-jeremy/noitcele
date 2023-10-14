import {
  Box,
  Center,
  Heading,
  Image,
  Stack,
  HStack,
  Text,
} from '@chakra-ui/react';
import { useContext } from 'react';
import { appContext } from '../Context/Context';

const Distribution = () => {
  const { groupA, groupB, groupC, groupD, height } = useContext(appContext);
  return (
    <Box paddingY={2}>
      <Center
        height={height}
        id="distribution-onboarding"
        fontSize={'2xl'}
        fontWeight={'bold'}
      >
        <Center
          width={'90%'}
          height={'75%'}
          borderY={'1px solid'}
          borderColor={'blackAlpha.500'}
        >
          Tirage au sort
        </Center>
      </Center>
      <Stack spacing={10} id="distribution" fontSize={'sm'} paddingTop={'70px'}>
        <Stack>
          <Heading size={'sm'}>Groupe A :</Heading>
          {groupA.map(one => (
            <HStack key={one.nb}>
              <Image
                src={one.picture}
                boxSize={10}
                alt={one.name}
                rounded={'full'}
              />
              <Text>{one.name}</Text>
            </HStack>
          ))}
        </Stack>
        <Stack>
          <Heading size={'sm'}>Groupe B :</Heading>
          {groupB.map(one => (
            <HStack key={one.nb}>
              <Image
                src={one.picture}
                boxSize={10}
                alt={one.name}
                rounded={'full'}
              />
              <Text>{one.name}</Text>
            </HStack>
          ))}
        </Stack>
        <Stack>
          <Heading size={'sm'}>Groupe C :</Heading>
          {groupC.map(one => (
            <HStack key={one.nb}>
              <Image
                src={one.picture}
                boxSize={10}
                alt={one.name}
                rounded={'full'}
              />
              <Text>{one.name}</Text>
            </HStack>
          ))}
        </Stack>
        <Stack>
          <Heading size={'sm'}>Groupe D :</Heading>
          {groupD.map(one => (
            <HStack key={one.nb}>
              <Image
                src={one.picture}
                boxSize={10}
                alt={one.name}
                rounded={'full'}
              />
              <Text>{one.name}</Text>
            </HStack>
          ))}
        </Stack>
      </Stack>
    </Box>
  );
};

export default Distribution;
