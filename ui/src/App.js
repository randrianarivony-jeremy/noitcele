import { Link, Stack } from '@chakra-ui/react';
import React, { useContext, useEffect, useRef, useState } from 'react';
import './App.css';
import AllCandidates from './Components/AllCandidates';
import { LockScroll } from './Components/Miscellaneous';
import Navbar from './Components/Navbar';
import Wallpaper from './Components/Wallpaper';
import { appContext } from './Context/Context';
import Final from './Finale/Final';
import GroupStage from './GroupPhase/GroupStage';
import Semifinal from './Semifinal/Semifinal';
import ThirdPlace from './ThirdPlace/ThirdPlace';
import About from './Components/About';
import Distribution from './Components/Distribution';

function App() {
  const { thirdFinal, final, semifinal } = useContext(appContext);
  const aboutLink = useRef();
  const [understood, setUnderstood] = useState(false);
  const [lockScroll, setLockScroll] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      aboutLink.current.click();
    }, 3000);
  }, []);

  return (
    <Stack>
      {lockScroll && <LockScroll />}
      <Wallpaper />
      <Navbar />
      <Link display={'none'} ref={aboutLink} href="#about" />
      <About setUnderstood={setUnderstood} setLockScroll={setLockScroll} />
      {understood && <AllCandidates />}
      {understood && <Distribution />}
      {understood && <GroupStage />}
      {semifinal && <Semifinal />}
      {thirdFinal && <ThirdPlace />}
      {final && <Final />}
    </Stack>
  );
}

export default App;
