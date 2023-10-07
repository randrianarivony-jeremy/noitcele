import { Image, Link, Text, useColorMode } from '@chakra-ui/react';
import React from 'react';

const Card = ({ candidate, selection, handleClick, next }) => {
  const { colorMode } = useColorMode();
  return (
    <Link
      rounded={'lg'}
      padding={2}
      align={'flex-start'}
      cursor={'pointer'}
      bgColor={colorMode === 'dark' && '#292929'}
      border={selection === candidate.nb ? '2px solid red' : 'none'}
      boxShadow={
        colorMode === 'light'
          ? selection === candidate.nb
            ? '0 0 15px red'
            : 'lg'
          : ''
      }
      _hover={{ boxShadow: selection !== candidate.nb && '2xl' }}
      href={`#${next}`}
      maxW={300}
      aspectRatio={[4 / 5, 2 / 3, 3 / 4]}
      width={['100%', '45%']}
      onClick={handleClick}
    >
      <Text>Candidat {candidate.nb}</Text>
      <Image
        src={candidate.picture}
        marginY={3}
        alt={candidate.name}
        width={'100%'}
        objectFit={'contain'}
        aspectRatio={1 / 1}
      />
      <Text
        fontWeight={'bold'}
        fontSize={['sm', 'sm', 'md']}
        wordBreak={'break-word'}
      >
        {candidate.name}
      </Text>
    </Link>
  );
};

export default Card;
