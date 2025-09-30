import { useEffect, useState } from "react";
import Card from "./components/Card";

export type CardDataType = {
  description: string,
  isActive: boolean,
  logo: string,
  name: string
}

const App = () => {
  const [cardData, setCardData] = useState<CardDataType []>([])

  useEffect(()=>{
    fetch("/data.json")
    .then(res => res.json())
    .then(data => {
      setCardData(data);
    })    
  },[])

  return (<div className="cardWrapper">
    { cardData.map(card => <Card key={card.name} {...card} />) }
  </div>)
}

export default App