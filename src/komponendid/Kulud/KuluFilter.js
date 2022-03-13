
import './KuluFilter.css';

const KuluFilter = (props) => {
    const filtriHandler = (event) => {
       props.onFiltriMuutus(event.target.value);
    };


  return (
    <div className='kulu-filter'>
      <div className='kulu-filter__control'>
        <label>Sordi aastate kaupa</label>
        <select value={props.valitud} onChange={filtriHandler}>
          <option value='2022'>2022</option>
          <option value='2021'>2021</option>
          <option value='2020'>2020</option>
          <option value='2019'>2019</option>
        </select>
      </div>
    </div>
  );
};

export default KuluFilter;