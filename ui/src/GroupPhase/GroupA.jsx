import { Box, HStack, Heading, Image, Link, Text } from '@chakra-ui/react';
import React, { useContext } from 'react';
import { appContext } from '../Context';

const GroupA = ({ groupA }) => {
  const { semifinalists, setSemifinalists, height } = useContext(appContext);

  return (
    <Box id="group-A" minH={height}>
      <Heading size={'sm'} paddingY={2}>
        Poule A
      </Heading>
      <Text>Iza no tsy tianao ho lany filoham-pirenena ?</Text>
      <HStack
        wrap={'wrap'}
        justify={'center'}
        align={'flex-start'}
        spacing={[2, 3, 4]}
      >
        {groupA.map(({ name, nb, picture }) => (
          <Link
            rounded={'lg'}
            padding={2}
            align={'flex-start'}
            cursor={'pointer'}
            boxShadow={semifinalists.A.nb === nb ? '0 0 10px red' : 'lg'}
            _hover={{ boxShadow: semifinalists.A.nb !== nb && '2xl' }}
            href="#group-B"
            key={nb}
            maxW={300}
            aspectRatio={[4 / 5, 2 / 3, 3 / 4]}
            width={['100%', '45%']}
            onClick={() =>
              setSemifinalists({ ...semifinalists, A: { name, nb, picture } })
            }
          >
            <Text>Candidat {nb}</Text>
            <Image
              src={picture}
              marginY={3}
              alt={name}
              width={'100%'}
              objectFit={'contain'}
              aspectRatio={1 / 1}
            />
            <Text
              fontWeight={'bold'}
              fontSize={['sm', 'sm', 'md']}
              wordBreak={'break-word'}
            >
              {name}
            </Text>
          </Link>
        ))}
      </HStack>
    </Box>
  );
};

export default GroupA;
