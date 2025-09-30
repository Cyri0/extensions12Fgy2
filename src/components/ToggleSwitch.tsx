import { useState } from "react"

function ToggleSwitch(props: {size: number, turn?: boolean}){
    const [turnOn, setTurnOn] = useState(props.turn ? props.turn : false)

    const click = () => {
        setTurnOn(!turnOn)
    }

    return (
    <div onClick={click}
    style={{"--toggleHeight": props.size + "px"} as React.CSSProperties}
         className={turnOn ? "toggleSwitch on" : "toggleSwitch"} >
        <div></div>
    </div>
    )
}
export default ToggleSwitch
