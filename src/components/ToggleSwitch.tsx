import { useState } from "react"

function ToggleSwitch(props: {size: number}){
    const [turnOn, setTurnOn] = useState(false)   

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
