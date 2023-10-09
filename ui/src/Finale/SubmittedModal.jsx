import {
  Button,
  Center,
  Circle,
  HStack,
  Image,
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Stack,
  Text,
  useColorMode,
  useColorModeValue,
} from '@chakra-ui/react';
import React, { useContext } from 'react';
import { appContext } from '../Context/Context';

const SubmittedModal = ({ isOpen, onOpen, onClose }) => {
  const { winner, finalists, thirdPlace } = useContext(appContext);
  const { colorMode } = useColorMode();
  const borderColor = useColorModeValue('blackAlpha.500', 'whiteAlpha.500');

  return (
    <Modal isOpen={isOpen} onClose={onClose} onOpen={onOpen} isCentered>
      <ModalOverlay />
      <ModalContent margin={3}>
        <ModalHeader>Misaotra</ModalHeader>
        <ModalBody>
          <Stack spacing={[5, 10]}>
            <Text textAlign={'center'}>
              Arahabaina nahavita adidy masina tamin'ny firenena e !!!
            </Text>
            <HStack
              justify={'center'}
              align={'flex-end'}
              rounded={'md'}
              // boxShadow={'lg'}
              boxShadow={colorMode === 'dark' ? '0 0 20px #1b1b1b' : 'lg'}
              padding={3}
            >
              <Circle
                position={'relative'}
                minW={'25%'}
                width={'25%'}
                aspectRatio={1}
              >
                <Image
                  rounded={'full'}
                  src={
                    Object.values(finalists).find(i => i.nb !== winner.nb)
                      .picture
                  }
                  border={'1px solid'}
                  borderColor={borderColor}
                  alt={
                    Object.values(finalists).find(i => i.nb !== winner.nb).name
                  }
                  objectFit={'contain'}
                  height={'100%'}
                />
                <Circle
                  size={7}
                  position={'absolute'}
                  top={-2}
                  right={-2}
                  bgColor={'#c0c0c0'}
                  color={'black'}
                >
                  <strong>-4</strong>
                </Circle>
              </Circle>
              <Circle
                position={'relative'}
                minW={'30%'}
                width={'30%'}
                aspectRatio={1}
              >
                <Image
                  objectFit={'contain'}
                  rounded={'full'}
                  border={'1px solid'}
                  height={'100%'}
                  borderColor={borderColor}
                  src={winner.picture}
                  alt={winner.name}
                />
                <Circle
                  size={7}
                  position={'absolute'}
                  top={-2}
                  right={-2}
                  bgColor={'#ffd700'}
                  color={'black'}
                >
                  <strong>-5</strong>
                </Circle>
              </Circle>
              <Center
                position={'relative'}
                minW={'20%'}
                width={'20%'}
                aspectRatio={1}
              >
                <Image
                  rounded={'full'}
                  src={thirdPlace.picture}
                  border={'1px solid'}
                  height={'100%'}
                  borderColor={borderColor}
                  objectFit={'contain'}
                  alt={thirdPlace.name}
                />
                <Circle
                  size={7}
                  position={'absolute'}
                  top={-2}
                  right={-2}
                  bgColor={'#cd7f32'}
                  color={'black'}
                >
                  <strong>-2</strong>
                </Circle>
              </Center>
            </HStack>
            <Text>
              Valim-pifidianana: <strong>07 Novembre 2023</strong>
            </Text>
          </Stack>
        </ModalBody>
        <ModalFooter>
          <Button onClick={onClose}>Fermer</Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};

export default SubmittedModal;
