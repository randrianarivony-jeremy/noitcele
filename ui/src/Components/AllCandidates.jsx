import { Box, Flex, HStack, Image } from '@chakra-ui/react';
import React, { useContext } from 'react';
import { appContext } from '../Context/Context';

const AllCandidates = () => {
  const { candidates, height } = useContext(appContext);
  return (
    <Flex
      wrap={'wrap'}
      justify={'center'}
      align={'center'}
      minH={height}
      height={'100%'}
      id="all-candidates"
      paddingTop={16}
    >
      {candidates.map(candidate => (
        <Image
          key={candidate.nb}
          margin={[2, 2, 4, 5]}
          src={candidate.picture}
          objectFit={'contain'}
          alt={candidate.name}
          width={[20, 100, 120, 150]}
          aspectRatio={1}
          rounded={'full'}
        />
      ))}
    </Flex>
  );
};

export default AllCandidates;
