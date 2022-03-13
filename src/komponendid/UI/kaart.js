import './Kaart.css'

function Kaart(props){
    const classes = 'kaart ' + props.className
    return <div className={classes}>{props.children}</div>
}

export default Kaart;