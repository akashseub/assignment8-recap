import { useEffect, useState } from "react";
import BodyCard from "./BodyCard";


const Body = () => {

    const [cards, setCards] = useState([]);

    console.log(cards)

    useEffect(() => {
        fetch('data.json')
            .then(res => res.json())
            .then(data => setCards(data))
    }, [])

    return (
        <div className="lg: max-w-7xl mx-auto grid grid-cols-4 justify-between gap-12 mt-8">
            {cards.map(card => <BodyCard
                key={card.id}
                card={card}
            ></BodyCard>)}
        </div>
    );
};

export default Body;