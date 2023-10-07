import { HStack } from '@chakra-ui/react';
import React, { useContext } from 'react';
import { appContext } from '../Context/Context';
import Card from '../Components/Card';
import Wrapper from '../Components/Wrapper';

const FinalDashboard = () => {
  const { finalists, winner, setWinner } = useContext(appContext);
  return (
    <HStack
      wrap={'wrap'}
      justify={'center'}
      align={'flex-start'}
      spacing={[2, 3, 4]}
    >
      {Object.values(finalists).map(candidate => (
        <Card
          key={candidate.nb}
          selection={winner?.nb}
          candidate={candidate}
          handleClick={() => setWinner(candidate)}
          next={'final-submit'}
        />
      ))}
    </HStack>
  );
};

export default Wrapper(FinalDashboard, 'finale', 'Finale');
