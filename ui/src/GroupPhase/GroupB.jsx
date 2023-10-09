import { HStack } from '@chakra-ui/react';
import React, { useContext } from 'react';
import Wrapper from '../Components/Wrapper';
import { appContext } from '../Context/Context';
import Card from '../Components/Card';

const GroupB = () => {
  const { groupB, semifinalists, setSemifinalists, setShowGroupC } =
    useContext(appContext);

  return (
    <HStack
      wrap={'wrap'}
      justify={'center'}
      align={'flex-start'}
      spacing={[2, 3, 4]}
    >
      {groupB.map(candidate => (
        <Card
          key={candidate.nb}
          selection={semifinalists.B.nb}
          candidate={candidate}
          handleClick={() => {
            setSemifinalists({ ...semifinalists, B: candidate });
            setShowGroupC(true);
          }}
          next="group-C"
        />
      ))}
    </HStack>
  );
};

export default Wrapper(GroupB, 'group-B', 'Poule B');
