import { HStack } from '@chakra-ui/react';
import React, { useContext } from 'react';
import Card from '../Components/Card';
import Wrapper from '../Components/Wrapper';
import { appContext } from '../Context/Context';

const SemifinalA = () => {
  const {
    semifinalistsA,
    finalists,
    setFinalists,
    setThirdFinalists,
    thirdFinalists,
  } = useContext(appContext);
  return (
    <HStack
      wrap={'wrap'}
      justify={'center'}
      align={'flex-start'}
      spacing={[2, 3, 4]}
    >
      {semifinalistsA.current.map(candidate => (
        <Card
          key={candidate.nb}
          selection={finalists.A.nb}
          candidate={candidate}
          handleClick={() => {
            setFinalists({ ...finalists, A: candidate });
            setThirdFinalists({
              ...thirdFinalists,
              A: semifinalistsA.current.find(one => one.nb !== candidate.nb),
            });
          }}
          next="semi-B"
        />
      ))}
    </HStack>
  );
};

export default Wrapper(SemifinalA, 'semi-A', 'Demi-finale A');
