import { HStack } from '@chakra-ui/react';
import React, { useContext } from 'react';
import Card from '../Components/Card';
import Wrapper from '../Components/Wrapper';
import { appContext } from '../Context/Context';

const GroupA = () => {
  const { semifinalists, setSemifinalists, setShowGroupB, groupA } =
    useContext(appContext);

  return (
    <HStack
      wrap={'wrap'}
      justify={'center'}
      align={'flex-start'}
      spacing={[2, 3, 4]}
    >
      {groupA.map(candidate => (
        <Card
          key={candidate.nb}
          selection={semifinalists.A.nb}
          candidate={candidate}
          handleClick={() => {
            setSemifinalists({ ...semifinalists, A: candidate });
            setShowGroupB(true);
          }}
          next="group-B"
        />
      ))}
    </HStack>
  );
};

export default Wrapper(GroupA, 'group-A', 'Poule A');
