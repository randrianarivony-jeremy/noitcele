import { HStack } from '@chakra-ui/react';
import React, { useContext } from 'react';
import Card from '../Components/Card';
import Wrapper from '../Components/Wrapper';
import { appContext } from '../Context/Context';

const GroupD = () => {
  const { groupD, semifinalists, setSemifinalists } = useContext(appContext);
  return (
    <HStack
      wrap={'wrap'}
      align={'flex-start'}
      justify={'center'}
      spacing={[2, 3, 4]}
    >
      {groupD.map(candidate => (
        <Card
          key={candidate.nb}
          candidate={candidate}
          selection={semifinalists.D.nb}
          handleClick={() =>
            setSemifinalists({ ...semifinalists, D: candidate })
          }
          next="group-phase-submit"
        />
      ))}
    </HStack>
  );
};

export default Wrapper(GroupD, 'group-D', 'Poule D');
