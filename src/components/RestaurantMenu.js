import { useEffect, useState } from "react";
import ShimmerRC from "./ShimmerRC";
import { MENU_API } from "../utils/constants.js";
import { useParams } from "react-router-dom";

const RestaurantMenu = () => {
    const [restInfo, setRestInfo] = useState(null);
    const {resId} = useParams();
    console.log(resId)

    useEffect(() => {
        fetchMenu();
    }, []);

    const fetchMenu = async () => {
        const data = await fetch(MENU_API + resId);
        const json = await data.json();
        setRestInfo(json?.data)
    };


    if (restInfo === null) return <ShimmerRC />;

    const { name, cuisines, costForTwoMessage } = restInfo?.cards[0]?.card?.card?.info; //destructuring with particular restaurent data
    const  {itemCards}  = restInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card;
    return (
        <div className="menu">
            <h1>{name}</h1>
            <p>{cuisines.join(", ")} - {costForTwoMessage}</p>
            <h2>Menu</h2>
            <ul>
                {itemCards.map((item) => (
                    <li key={item.card.info.id}>{item.card.info.name}{"- Rs."}{item.card.info.price/100 || item.card.info.defaultPrice/100}</li>
                ))}
            </ul>
        </div>
    );
};

export default RestaurantMenu;