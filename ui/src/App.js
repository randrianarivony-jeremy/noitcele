import { Box } from '@chakra-ui/react';
import React, { useContext, useEffect, useRef, useState } from 'react';
import './App.css';
import { appContext } from './Context';
import Final from './Final';
import GroupStage from './GroupPhase/GroupStage';
import Semifinal from './Semifinal/Semifinal';

function App() {
  const { candidates, final, semifinal } = useContext(appContext);
  const total = useRef([...candidates]);
  const [loading, setLoading] = useState(true);
  const groupA = useRef([]);
  const groupB = useRef([]);
  const groupC = useRef([]);
  const groupD = useRef([]);

  const handleGroups = () => {
    let groupALength,
      groupBLength,
      groupCLength = 0;
    //G R O U P  A
    if (groupA.current.length > 0) return;
    groupALength =
      groupBLength === 4 || groupCLength === 4
        ? 3
        : Math.floor(Math.random() * 2) + 3;
    for (let i = 0; i < groupALength; i++) {
      const choosen = Math.floor(Math.random() * total.current.length);
      groupA.current.push(total.current[choosen]);
      total.current.splice(choosen, 1);
    }

    //G R O U P  B
    if (groupB.current.length > 0) return;
    groupBLength =
      groupALength === 4 || groupCLength === 4
        ? 3
        : Math.floor(Math.random() * 2) + 3;
    for (let i = 0; i < groupBLength; i++) {
      const choosen = Math.floor(Math.random() * total.current.length);
      groupB.current.push(total.current[choosen]);
      total.current.splice(choosen, 1);
    }

    //G R O U P  C
    if (groupC.current.length > 0) return;
    groupCLength =
      groupBLength === 4 || groupALength === 4
        ? 3
        : Math.floor(Math.random() * 2) + 3;
    for (let i = 0; i < groupCLength; i++) {
      const choosen = Math.floor(Math.random() * total.current.length);
      groupC.current.push(total.current[choosen]);
      total.current.splice(choosen, 1);
    }

    //G R O U P  D
    if (groupD.current.length > 0) return;
    groupD.current = [...total.current];
    setLoading(false);
  };

  useEffect(() => handleGroups(), []);
  if (!loading)
    return (
      <Box paddingY={3} paddingX={2}>
        <GroupStage
          groupA={groupA.current}
          groupB={groupB.current}
          groupC={groupC.current}
          groupD={groupD.current}
        />
        {semifinal && <Semifinal />}
        {final && <Final />}
      </Box>
    );
}

export default App;
