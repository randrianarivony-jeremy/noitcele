import { HStack, Image, Square } from '@chakra-ui/react';
import React, { useContext } from 'react';
import { appContext } from '../Context/Context';
import Wrapper from './Wrapper';

const AllCandidates = () => {
  const { candidates, height } = useContext(appContext);
  return (
    <HStack wrap={'wrap'} justify={'center'} align={'center'} minH={height}>
      {candidates.map(candidate => (
        <Square size={'20vw'} maxW={250} key={candidate.nb}>
          <Image
            src={candidate.picture}
            objectFit={'contain'}
            alt={candidate.name}
            width={'100%'}
          />
        </Square>
      ))}
    </HStack>
  );
};

export default Wrapper(AllCandidates, 'all-candidates', 'Liste');
