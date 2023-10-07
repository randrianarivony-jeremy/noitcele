import { createContext, useEffect, useRef, useState } from 'react';

import razafinjoelina from '../Assets/0.jpg';
import andrianainarivelo from '../Assets/1.jpg';
import rajoelina from '../Assets/2.jpg';
import ratsiraka from '../Assets/3.jpg';
import ravalomanana from '../Assets/4.jpg';
import paraina from '../Assets/5.jpg';
import raobelina from '../Assets/6.jpg';
import razafitsiandraofa from '../Assets/7.jpg';
import ratsirahonana from '../Assets/8.jpg';
import rajaonarimampianina from '../Assets/9.jpg';
import raderanirina from '../Assets/10.jpg';
import ratsietison from '../Assets/11.jpg';
import randrianasoloniaiko from '../Assets/12.jpg';

import { useWindowSize } from '@uidotdev/usehooks';

export const appContext = createContext();

const AppContext = ({ children }) => {
  const { height } = useWindowSize();
  const candidates = [
    { name: 'Tahina Razafinjoelina', nb: 1, picture: razafinjoelina },
    { name: 'Hajo Andrianainarivelo', nb: 2, picture: andrianainarivelo },
    { name: 'Andry Rajoelina', nb: 3, picture: rajoelina },
    { name: 'Rolland Ratsiraka', nb: 4, picture: ratsiraka },
    { name: 'Marc Ravalomanana', nb: 5, picture: ravalomanana },
    { name: 'Richard Paraina', nb: 6, picture: paraina },
    { name: 'Andry Raobelina', nb: 7, picture: raobelina },
    {
      name: 'Jean-Brunelle Razafitsiandraofa',
      nb: 8,
      picture: razafitsiandraofa,
    },
    { name: 'Lalaina Ratsirahonana', nb: 9, picture: ratsirahonana },
    {
      name: 'Hery Rajaonarimampianina',
      nb: 10,
      picture: rajaonarimampianina,
    },
    {
      name: 'Sendrison Daniela Raderanirina',
      nb: 11,
      picture: raderanirina,
    },
    { name: 'Jean-Jacques Ratsietison', nb: 12, picture: ratsietison },
    {
      name: 'Siteny Randrianasoloniaiko',
      nb: 13,
      picture: randrianasoloniaiko,
    },
  ];
  const total = useRef([...candidates]);

  const groupA = useRef([]);
  const groupB = useRef([]);
  const groupC = useRef([]);
  const groupD = useRef([]);

  const [semifinal, setSemifinal] = useState(false);
  const [semifinalists, setSemifinalists] = useState({
    A: '',
    B: '',
    C: '',
    D: '',
  });

  const [thirdFinal, setThirdFinal] = useState(false);
  const semifinalistsA = useRef([]);
  const semifinalistsB = useRef([]);

  const [final, setFinal] = useState(false);
  const [finalists, setFinalists] = useState({
    A: '',
    B: '',
  });
  const [thirdFinalists, setThirdFinalists] = useState({
    A: '',
    B: '',
  });
  const [thirdPlace, setThirdPlace] = useState();
  const [winner, setWinner] = useState();

  useEffect(() => {
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
  }, []);

  return (
    <appContext.Provider
      value={{
        height,
        candidates,
        groupA: groupA.current,
        groupB: groupB.current,
        groupC: groupC.current,
        groupD: groupD.current,
        semifinal,
        setSemifinal,
        semifinalistsA,
        semifinalistsB,
        semifinalists,
        setSemifinalists,
        thirdFinal,
        thirdFinalists,
        setThirdFinalists,
        setThirdFinal,
        thirdPlace,
        setThirdPlace,
        final,
        setFinal,
        finalists,
        setFinalists,
        winner,
        setWinner,
      }}
    >
      {children}
    </appContext.Provider>
  );
};

export default AppContext;
