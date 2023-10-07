import { HStack } from '@chakra-ui/react';
import React, { useContext } from 'react';
import Wrapper from '../Components/Wrapper';
import { appContext } from '../Context/Context';
import Card from '../Components/Card';

const GroupC = () => {
  const { groupC, semifinalists, setSemifinalists } = useContext(appContext);

  return (
    <HStack
      wrap={'wrap'}
      justify={'center'}
      align={'flex-start'}
      spacing={[2, 3, 4]}
    >
      {groupC.map(candidate => (
        <Card
          key={candidate.nb}
          candidate={candidate}
          selection={semifinalists.C.nb}
          handleClick={() =>
            setSemifinalists({ ...semifinalists, C: candidate })
          }
          next="group-D"
        />
      ))}
    </HStack>
  );
};

export default Wrapper(GroupC, 'group-C', 'Poule C');
