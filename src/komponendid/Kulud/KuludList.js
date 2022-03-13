import KuluItem from "./KuluItem";
import "./KuludList.css";

const KuludList = (props) => {
  if (props.kulutused.length === 0) {
    return <h2 className="kulud-list__fallback">Kulusid ei leitud</h2>;
  }
  return (
    <ul className="kulud-list">
      {props.kulutused.map((kulu) => (
        <KuluItem
          key={kulu.id}
          pealkiri={kulu.pealkiri}
          summa={kulu.summa}
          kuupaev={kulu.kuupaev}
        />
      ))}
    </ul>
  );
};

export default KuludList;
