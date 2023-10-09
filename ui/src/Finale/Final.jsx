import {
  Box,
  Button,
  Center,
  Link,
  Stack,
  useDisclosure,
  useToast,
} from '@chakra-ui/react';
import axios from 'axios';
import React, { useContext, useEffect, useRef, useState } from 'react';
import { appContext } from '../Context/Context';
import FinalDashboard from './FinalDashboard';
import SubmittedModal from './SubmittedModal';

const Final = () => {
  const { finalists, height, semifinalists, winner, thirdPlace } =
    useContext(appContext);
  const [finished, setFinished] = useState(false);
  const [submitEnabled, setSubmitEnabled] = useState(true);
  const [loading, setLoading] = useState(false);
  const finalOnboardingLink = useRef();
  const finalLink = useRef();
  const toast = useToast();
  const { isOpen, onClose, onOpen } = useDisclosure();

  const handleSubmit = async () => {
    if (winner === undefined)
      return toast({
        status: 'error',
        description: 'Vote incomplet',
        isClosable: true,
        position: 'top',
      });
    if (!submitEnabled)
      return toast({
        id: 'voted',
        status: 'error',
        title: 'Vous avez déjà voté.',
      });
    setLoading(true);
    let payload = [];
    Object.values(semifinalists).map(candidat => {
      return (payload = [...payload, { nb: candidat.nb, vote: 1 }]);
    });
    payload = payload.map(candidat => {
      if (candidat.nb === thirdPlace.nb) return { ...candidat, vote: 2 };
      if (candidat.nb === winner.nb) return { ...candidat, vote: 5 };
      if (
        candidat.nb ===
        Object.values(finalists).find(i => i.nb !== winner.nb).nb
      )
        return { ...candidat, vote: 4 };
      else return candidat;
    });
    axios
      .post(process.env.REACT_APP_API_URL + '/api/vote', payload, {
        withCredentials: true,
      })
      .then(() => {
        setFinished(true);
        onOpen();
      })
      .catch(({ response: { status } }) => {
        if (status === 403 && !toast.isActive('voted')) {
          setSubmitEnabled(false);
          toast({
            id: 'voted',
            status: 'error',
            title: 'Vous avez déjà voté.',
          });
        } else
          toast({
            id: 'error',
            status: 'error',
            title:
              "Une erreur s'est produite. Veuillez réessayer ultérieurement.",
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
    <Box
      pointerEvents={finished && 'none'}
      opacity={finished ? 0.5 : 1}
      paddingX={3}
      paddingY={2}
    >
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

      <Stack spacing={10}>
        <FinalDashboard />
        <Button
          id="final-submit"
          bgColor={winner !== undefined && 'brand'}
          onClick={handleSubmit}
          isLoading={loading}
          loadingText="Envoi ..."
          color={'blackAlpha.900'}
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
      {winner && (
        <SubmittedModal isOpen={isOpen} onClose={onClose} onOpen={onOpen} />
      )}
    </Box>
  );
};

export default Final;
