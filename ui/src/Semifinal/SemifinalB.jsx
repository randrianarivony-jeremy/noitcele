import { Box, HStack, Heading, Image, Link, Text } from '@chakra-ui/react';
import React, { useContext } from 'react';
import { appContext } from '../Context';

const SemifinalB = () => {
  const { height, semifinalistsB, finalists, setFinalists } =
    useContext(appContext);

  return (
    <Box id="semi-B" minH={height - 100}>
      <Heading size={'sm'} paddingY={2}>
        Demi B
      </Heading>
      <Text>Iza no tsy tianao ho lany filoham-pirenena ?</Text>
      <HStack
        wrap={'wrap'}
        align={'flex-start'}
        justify={'center'}
        spacing={[2, 3, 4]}
      >
        {semifinalistsB.current.map(({ name, nb, picture }) => (
          <Link
            rounded={'lg'}
            padding={2}
            align={'flex-start'}
            cursor={'pointer'}
            boxShadow={finalists.B.nb === nb ? '0 0 10px red' : 'lg'}
            _hover={{ boxShadow: finalists.B.nb !== nb && '2xl' }}
            href="#semi-submit"
            key={nb}
            maxW={300}
            aspectRatio={[4 / 5, 2 / 3, 3 / 4]}
            width={['100%', '45%']}
            onClick={() =>
              setFinalists({ ...finalists, B: { name, picture, nb } })
            }
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
            <Text fontWeight={'bold'} fontSize={'sm'} wordBreak={'break-word'}>
              {name}
            </Text>
          </Link>
        ))}
      </HStack>
    </Box>
  );
};

export default SemifinalB;
