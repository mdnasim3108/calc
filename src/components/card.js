import './card.css'
function Card(props) {
    return (
        <div className="container">
            <div className="layout">
                {props.children}
            </div>
        </div>
    )
}
export default Card