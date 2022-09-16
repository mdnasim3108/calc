import './button.css'
function Button(props){
    var classes="btn boxEffect "+props.id;
    return (
        <button id={props.label} className={classes} onClick={()=>{props.onClicker(props.label)}}>{props.label}</button>
    )
}
export default Button