import { HStack } from '@chakra-ui/react';
import React, { useContext } from 'react';
import { appContext } from '../Context/Context';
import Card from '../Components/Card';
import Wrapper from '../Components/Wrapper';

const ThirdDashboard = () => {
  const { thirdFinalists, thirdPlace, setThirdPlace } = useContext(appContext);
  return (
    <HStack
      wrap={'wrap'}
      justify={'center'}
      align={'flex-start'}
      spacing={[2, 3, 4]}
    >
      {Object.values(thirdFinalists).map(candidate => (
        <Card
          key={candidate.nb}
          selection={thirdPlace?.nb}
          candidate={candidate}
          handleClick={() => setThirdPlace(candidate)}
          next={'third-submit'}
        />
      ))}
    </HStack>
  );
};

export default Wrapper(ThirdDashboard, 'third', 'Troisième place');
