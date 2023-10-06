import { Box, HStack, Heading, Image, Link, Text } from '@chakra-ui/react';
import React, { useContext } from 'react';
import { appContext } from '../Context';

const GroupC = ({ groupC }) => {
  const { semifinalists, setSemifinalists, height } = useContext(appContext);

  return (
    <Box id="group-C" minH={height}>
      <Heading size={'sm'} paddingY={2}>
        Poule C
      </Heading>
      <Text>Iza no tsy tianao ho lany filoham-pirenena ?</Text>
      <HStack
        wrap={'wrap'}
        justify={'center'}
        align={'flex-start'}
        spacing={[2, 3, 4]}
      >
        {groupC.map(({ name, nb, picture }) => (
          <Link
            rounded={'lg'}
            padding={2}
            align={'flex-start'}
            cursor={'pointer'}
            boxShadow={semifinalists.C.nb === nb ? '0 0 10px red' : 'lg'}
            _hover={{ boxShadow: semifinalists.C.nb !== nb && '2xl' }}
            href="#group-D"
            key={nb}
            maxW={300}
            aspectRatio={[4 / 5, 2 / 3, 3 / 4]}
            width={['100%', '45%']}
            onClick={() =>
              setSemifinalists({ ...semifinalists, C: { name, picture, nb } })
            }
          >
            <Text>Candidat {nb}</Text>
            <Image
              src={picture}
              alt={name}
              marginY={3}
              width={'100%'}
              maxW={320}
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

export default GroupC;
