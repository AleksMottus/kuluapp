

import KuluKuupaev from "./KuluKuupaev";
import "./KuluItem.css";
import Kaart from "../UI/kaart";

function KuluItem(props) {

  return (
    <li>
    <Kaart className="Kulu-item">
      <KuluKuupaev kuupaev={props.kuupaev}/>
      <div className="Kulu-item__kirjeldus">
        <h2>{props.pealkiri}</h2>
        <div className="Kulu-item__hind">€{props.summa}</div>
      </div>
    </Kaart>
    </li>
  );
};

export default KuluItem;
