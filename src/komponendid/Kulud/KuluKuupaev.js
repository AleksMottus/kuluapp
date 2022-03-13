import './KuluKuupaev.css';

function KuluKuupaev(props) {
    const kuu = props.kuupaev.toLocaleString("et-ee", { month: "long" });
    const paev = props.kuupaev.toLocaleString("et-ee", { day: "2-digit" });
    const aasta = props.kuupaev.getFullYear();

    return (
    <div className='kulu-kuupaev'>
        <div className='kulu-kuupaev__kuu'>{kuu}</div>
        <div className='kulu-kuupaev__aasta'>{aasta}</div>
        <div className='kulu-kuupaev__paev'>{paev}</div>
    </div>
    );
}


export default KuluKuupaev;