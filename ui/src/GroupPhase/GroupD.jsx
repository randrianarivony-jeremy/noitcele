import { Box, HStack, Heading, Image, Link, Text } from '@chakra-ui/react';
import React, { useContext } from 'react';
import { appContext } from '../Context';

const GroupD = ({ groupD }) => {
  const { semifinalists, setSemifinalists, height } = useContext(appContext);
  return (
    <Box id="group-D" minH={height - 120}>
      <Heading size={'sm'} paddingY={2}>
        Poule D
      </Heading>
      <Text>Iza no tsy tianao ho lany filoham-pirenena ?</Text>
      <HStack
        wrap={'wrap'}
        align={'flex-start'}
        justify={'center'}
        spacing={[2, 3, 4]}
      >
        {groupD.map(({ name, nb, picture }) => (
          <Link
            rounded={'lg'}
            padding={2}
            align={'flex-start'}
            cursor={'pointer'}
            boxShadow={semifinalists.D.nb === nb ? '0 0 10px red' : 'lg'}
            _hover={{ boxShadow: semifinalists.D.nb !== nb && '2xl' }}
            href="#group-phase-submit"
            key={nb}
            maxW={300}
            aspectRatio={[4 / 5, 2 / 3, 3 / 4]}
            width={['100%', '45%']}
            onClick={() =>
              setSemifinalists({ ...semifinalists, D: { name, picture, nb } })
            }
          >
            <Text>Candidat {nb}</Text>
            <Image
              src={picture}
              alt={name}
              width={'100%'}
              marginY={3}
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

export default GroupD;
