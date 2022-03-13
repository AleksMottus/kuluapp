import "./Graafik.css";
import GraafikTulbad from "./GraafikuTulbad";

const Graafik = (props) => {
    const andmeteVaartused = props.andmePunktid.map(andmePunkt => andmePunkt.value);
    const maxSumma = Math.max(...andmeteVaartused);

  return (
    <div className="graafik">
      {props.andmePunktid.map((andmePunkt) => (
        <GraafikTulbad
          key={andmePunkt.label}
          value={andmePunkt.value}
          maxValue={maxSumma}
          label={andmePunkt.label}
        />
      ))}
    </div>
  );
};

export default Graafik;
