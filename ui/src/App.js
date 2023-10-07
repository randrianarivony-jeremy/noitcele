import { Link, Stack } from '@chakra-ui/react';
import React, { useContext, useEffect, useRef, useState } from 'react';
import './App.css';
import AllCandidates from './Components/AllCandidates';
import LockScroll from './Components/LockScroll';
import Navbar from './Components/Navbar';
import Wallpaper from './Components/Wallpaper';
import { appContext } from './Context/Context';
import Final from './Finale/Final';
import GroupStage from './GroupPhase/GroupStage';
import Semifinal from './Semifinal/Semifinal';
import ThirdPlace from './ThirdPlace/ThirdPlace';

function App() {
  const { thirdFinal, final, semifinal } = useContext(appContext);
  const allCandidatesLink = useRef();
  const groupStageLink = useRef();
  const groupALink = useRef();
  const [lockScroll, setLockScroll] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      allCandidatesLink.current.click();
    }, 3000);
    setTimeout(() => {
      groupStageLink.current.click();
    }, 6000);
    setTimeout(() => {
      groupALink.current.click();
      setLockScroll(false);
    }, 9000);
  }, []);

  return (
    <Stack paddingY={3} paddingX={2}>
      {lockScroll && <LockScroll />}
      <Wallpaper />
      <Navbar />
      <Link display={'none'} ref={allCandidatesLink} href="#all-candidates" />
      <AllCandidates />
      <Link
        display={'none'}
        ref={groupStageLink}
        href="#group-stage-onboarding"
      />
      <GroupStage />
      <Link display={'none'} ref={groupALink} href="#group-A" />
      {semifinal && <Semifinal />}
      {thirdFinal && <ThirdPlace />}
      {final && <Final />}
    </Stack>
  );
}

export default App;
