import "./GraafikTulbad.css";

const GraafikTulp = (props) => {
  let tulbaTaitmine = "0%";

  if (props.maxValue > 0) {
    tulbaTaitmine = Math.round((props.value / props.maxValue) * 100) + "%";
  }

  return (
    <div className="graafik-tulp">
      <div className="graafik-tulp__inner">
        <div
          className="graafik-tulp__fill"
          style={{ height: tulbaTaitmine }}
        ></div>
      </div>
      <div className="graafik-tulp__label">{props.label}</div>
    </div>
  );
};

export default GraafikTulp;
