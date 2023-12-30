

const BodyCard = ({card}) => {
    return (
        <div className="border rounded-lg" style={{backgroundColor: card.category_bg}}>
            <img className="w-full" src={card.picture} alt="" />
            <p>{card.category}</p>
            <h4>{card.title}</h4>
        </div>
    );
};

export default BodyCard;