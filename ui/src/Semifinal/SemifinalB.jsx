import { HStack } from '@chakra-ui/react';
import React, { useContext } from 'react';
import Card from '../Components/Card';
import { appContext } from '../Context/Context';
import Wrapper from '../Components/Wrapper';

const SemifinalB = () => {
  const {
    semifinalistsB,
    finalists,
    setFinalists,
    setThirdFinalists,
    thirdFinalists,
  } = useContext(appContext);

  return (
    <HStack
      wrap={'wrap'}
      align={'flex-start'}
      justify={'center'}
      spacing={[2, 3, 4]}
    >
      {semifinalistsB.current.map(candidate => (
        <Card
          key={candidate.nb}
          selection={finalists.B.nb}
          candidate={candidate}
          handleClick={() => {
            setFinalists({ ...finalists, B: candidate });
            setThirdFinalists({
              ...thirdFinalists,
              B: semifinalistsB.current.find(one => one.nb !== candidate.nb),
            });
          }}
          next="semi-submit"
        />
      ))}
    </HStack>
  );
};

export default Wrapper(SemifinalB, 'semi-B', 'Demi-finale B');
