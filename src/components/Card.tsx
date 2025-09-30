import type { CardDataType } from "../App"
import ToggleSwitch from "./ToggleSwitch"

const Card = (props: CardDataType) => {
    return (
    <section className="card">
        <div className="top">
            <img src={props.logo} />
            <div>
                <h3>{props.name}</h3>
                <p>{props.description}</p>
            </div>
        </div>
        <div className="bot">
            <button>Remove</button>
            <ToggleSwitch size={20} 
            turn={props.isActive} />
        </div>
    </section>)
}

export default Card