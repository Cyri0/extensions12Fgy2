import { useEffect, useState } from "react";

type CardDataType = {
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


  return (<div>
    { cardData.map(card => <img src={card.logo}/>) }
  </div>)
}

export default App