import {
  Box,
  Button,
  Center,
  HStack,
  Heading,
  Image,
  Link,
  Modal,
  ModalBody,
  ModalContent,
  ModalHeader,
  Stack,
  Text,
  useToast,
} from '@chakra-ui/react';
import React, { useContext, useEffect, useRef, useState } from 'react';
import { appContext } from './Context';
import axios from 'axios';

const Final = () => {
  const { finalists, height, semifinalists } = useContext(appContext);
  const [finished, setFinished] = useState(false);
  const [loading, setLoading] = useState(false);
  const [winner, setWinner] = useState();
  const finalOnboardingLink = useRef();
  const finalLink = useRef();
  const toast = useToast();

  const handleSubmit = async () => {
    setLoading(true);
    let payload = [];
    Object.values(semifinalists).map(candidat => {
      payload = [...payload, { nb: candidat.nb, vote: 1 }];
    });
    payload = payload.map(candidat => {
      if (candidat.nb === winner.nb) return { ...candidat, vote: 4 };
      if (
        candidat.nb ===
        Object.values(finalists).find(i => i.nb !== winner.nb).nb
      )
        return { ...candidat, vote: 2 };
      else return candidat;
    });
    axios
      .post(process.env.REACT_APP_API_URL + 'api/vote', payload, {
        withCredentials: true,
      })
      .then(data => console.log(data))
      .catch(({ response: { status } }) => {
        if (status === 403 && !toast.isActive('voted'))
          toast({
            id: 'voted',
            status: 'error',
            title: 'Vous avez déjà voté.',
          });
      })
      .finally(() => setLoading(false));
  };

  useEffect(() => {
    finalOnboardingLink.current.click();
    setTimeout(() => {
      finalLink.current.click();
    }, 3000);
  }, []);

  return (
    <Box pointerEvents={finished && 'none'} opacity={finished ? 0.5 : 1}>
      <Center
        height={height}
        id="final-onboarding"
        fontSize={'2xl'}
        fontWeight={'bold'}
      >
        <Center
          width={'90%'}
          height={'75%'}
          borderY={'1px solid'}
          borderColor={'blackAlpha.500'}
        >
          Finale
        </Center>
      </Center>

      <Stack spacing={10} minH={height} id="finale">
        <Heading size={'sm'} paddingY={2}>
          Finale
        </Heading>
        <Text>Iza no tsy tianao ho lany filoham-pirenena ?</Text>
        <Box>
          <HStack
            wrap={'wrap'}
            justify={'center'}
            align={'flex-start'}
            spacing={[2, 3, 4]}
          >
            {Object.values(finalists).map(({ name, nb, picture }) => (
              <Link
                rounded={'lg'}
                padding={2}
                align={'flex-start'}
                justify={'flex-start'}
                cursor={'pointer'}
                boxShadow={winner?.nb === nb ? '0 0 10px red' : 'lg'}
                _hover={{ boxShadow: winner?.nb !== nb && '2xl' }}
                key={nb}
                maxW={300}
                aspectRatio={[4 / 5, 2 / 3, 3 / 4]}
                width={['100%', '45%']}
                onClick={() => setWinner({ nb, name, picture })}
              >
                <Text>Candidat {nb}</Text>
                <Image
                  src={picture}
                  alt={name}
                  width={'100%'}
                  maxW={320}
                  marginY={3}
                  objectFit={'contain'}
                  aspectRatio={1 / 1}
                />
                <Text
                  fontWeight={'bold'}
                  fontSize={'sm'}
                  wordBreak={'break-word'}
                >
                  {name}
                </Text>
              </Link>
            ))}
          </HStack>
        </Box>
        <Button
          id="final-submit"
          colorScheme="messenger"
          onClick={handleSubmit}
          isDisabled={winner === undefined}
          isLoading={loading}
          loadingText="Envoi ..."
        >
          Envoyer
        </Button>

        <Link
          display={'none'}
          ref={finalOnboardingLink}
          href="#final-onboarding"
        />
        <Link display={'none'} ref={finalLink} href="#finale" />
      </Stack>

      <Modal>
        <ModalContent>
          <ModalHeader>Misaotra</ModalHeader>
          <ModalBody>Misaotra nahavita adidy tamin'ny firenena.</ModalBody>
        </ModalContent>
      </Modal>
    </Box>
  );
};

export default Final;
