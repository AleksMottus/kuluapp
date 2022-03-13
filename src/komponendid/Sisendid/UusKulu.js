import react, {useState} from 'react';
import KuluForm from './KuluForm';
import './UusKulu.css'

const UusKulu = (props) => {
  const [muudabFormi, setMuudabFormi] = useState (false);
  const salvestataKuluAndmed = (sisestatudKuluAndmed) => {
    const kuluAndmed = {
      ...sisestatudKuluAndmed,
      id: Math.random().toString()
    };
    props.onLisaKulutus(kuluAndmed);
    setMuudabFormi(false);
  };

  const alustaFormiMuutust= () => {
    setMuudabFormi(true);
  };

  const lopetaFormiMuutus = () => {
    setMuudabFormi(false);
  };

  return (
    <div className='Uus-kulu'>
      {!muudabFormi && <button onClick={alustaFormiMuutust}>Lisa uus kulu</button>}
      {muudabFormi && <KuluForm onSalvestatudKuluAndmed={salvestataKuluAndmed} onCancel={lopetaFormiMuutus} />}
    </div>
  );
};

export default UusKulu;

