import {useState} from 'react';
import './KuluForm.css';
import './UusKulu.css';
const KuluForm = (props) => {
  const [sisestatudPealkiri, setSisestatudPealkiri] = useState('');
  const [sisestatudSumma, setSisestatudSumma] = useState('')
  const [sisestatudKuupaev, setSisestatudKuupaev] = useState('')
  const sisendiMuutusHandler= (event) => {
    setSisestatudPealkiri(event.target.value);
  };
  
  const summaMuutusHandler = (event) => {
    setSisestatudSumma(event.target.value);
  };

  const kuupaevMuutusHandler = (event) => {
  setSisestatudKuupaev(event.target.value);
  };

  const submitHandler = (event) => {
    event.preventDefault();

    const kuluAndmed = {
      pealkiri: sisestatudPealkiri,
      summa: +sisestatudSumma,
      kuupaev: new Date (sisestatudKuupaev)
    };

    props.onSalvestatudKuluAndmed(kuluAndmed);
    setSisestatudPealkiri('');
    setSisestatudSumma('');
    setSisestatudKuupaev('');
  };

  return (
    <form  onSubmit={submitHandler}>
      <div className='Uus-kulu__controls'>
        <div className='Uus-kulu__control'>
          <label>Pealkiri</label>
          <input type='text' value={sisestatudPealkiri} onChange={sisendiMuutusHandler} />
        </div>
        <div className='Uus-kulu__control'>
          <label>Summa</label>
          <input type='number' min='0.01' step='0.01' value={sisestatudSumma} onChange={summaMuutusHandler} />
        </div>
        <div className='Uus-kulu__control'>
          <label>Kuupäev</label>
          <input type='date' min='2019-01-01' max='2022-12-31' value={sisestatudKuupaev} onChange={kuupaevMuutusHandler}/>
        </div>
      </div>
      <div className='Uus-kulu__actions'>
        <button type="button" onClick={props.onCancel}>Cancel</button>
        <button type='submit'>Lisa Kulutus</button>
      </div>
    </form>
  );
};

export default KuluForm;