import { useState } from "react";
import "./Kulud.css";
import Kaart from "../UI/kaart";
import KuluFilter from "./KuluFilter";
import KuludList from "./KuludList";
import KuludeGraafik from "./KuludeGraafik";



function KoikKulud(props) {
  const [filterAasta, setFilterAasta] = useState("2019");

  const filtriMuutuseHandler = (valitudAasta) => {
    setFilterAasta(valitudAasta);
  };
  const filteredKulud = props.andmed.filter(kulu => {
    return kulu.kuupaev.getFullYear().toString() === filterAasta;
  });

  return (
    <div>
      <Kaart className="kulud">
        <KuluFilter
          valitud={filterAasta}
          onFiltriMuutus={filtriMuutuseHandler}
        />
        <KuludeGraafik kulud={filteredKulud}/>
        <KuludList kulutused={filteredKulud} />
      </Kaart>
      
    </div>
  );
};

export default KoikKulud;
