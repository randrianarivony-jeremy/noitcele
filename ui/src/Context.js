import { createContext, useRef, useState } from 'react';

import razafinjoelina from './Assets/0.jpg';
import andrianainarivelo from './Assets/1.jpg';
import rajoelina from './Assets/2.jpg';
import ratsiraka from './Assets/3.jpg';
import ravalomanana from './Assets/4.jpg';
import paraina from './Assets/5.jpg';
import raobelina from './Assets/6.jpg';
import razafitsiandraofa from './Assets/7.jpg';
import ratsirahonana from './Assets/8.jpg';
import rajaonarimampianina from './Assets/9.jpg';
import raderanirina from './Assets/10.jpg';
import ratsietison from './Assets/11.jpg';
import randrianasoloniaiko from './Assets/12.jpg';

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

  const [semifinal, setSemifinal] = useState(false);
  const [semifinalists, setSemifinalists] = useState({
    A: '',
    B: '',
    C: '',
    D: '',
  });

  const semifinalistsA = useRef([]);
  const semifinalistsB = useRef([]);

  const [final, setFinal] = useState(false);
  const [finalists, setFinalists] = useState({
    A: '',
    B: '',
  });

  return (
    <appContext.Provider
      value={{
        height,
        candidates,
        semifinal,
        setSemifinal,
        semifinalistsA,
        semifinalistsB,
        semifinalists,
        setSemifinalists,
        final,
        setFinal,
        finalists,
        setFinalists,
      }}
    >
      {children}
    </appContext.Provider>
  );
};

export default AppContext;
