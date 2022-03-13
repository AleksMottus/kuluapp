import react, { useState } from "react";
import Kulud from "./komponendid/Kulud/Kulud";
import UusKulu from "./komponendid/Sisendid/UusKulu";

const Dummy_kulutus = [
  {
    id: "e1",
    pealkiri: "Autokindlustus",
    summa: 302.03,
    kuupaev: new Date(2021, 6, 26),
  },
  {
    id: "e2",
    pealkiri: "Söök",
    summa: 149.26,
    kuupaev: new Date(2021, 3, 22),
  },
  {
    id: "e3",
    pealkiri: "Telekas",
    summa: 399.99,
    kuupaev: new Date(2020, 1, 8),
  },
  {
    id: "e4",
    pealkiri: "Jalgratas",
    summa: 112.77,
    kuupaev: new Date(2022, 3, 17),
  },
];


const App = () => {
  const[kulud, setKulud] = useState(Dummy_kulutus)

  const lisaKulutused = (kulu) => {
  setKulud((eelnevKulu) => {
    return [kulu, ...eelnevKulu]
    });
  };

  return (
    <div>
      <UusKulu onLisaKulutus={lisaKulutused}/>
      <Kulud andmed={kulud}/>
    </div>
  );
}

export default App;
