import RestaurantCard from "./RestaurantCard.js";
import { useEffect, useState } from "react";
import ShimmerRC from "./ShimmerRC";
import {CARDS_API} from "../utils/constants";
import { Link } from "react-router-dom";

const Body = () => {
    const [ResList, setResList] = useState([]);// state variables for restaurent cards
    const [filteredRestaurant, setFilteredRestaurant] = useState([]); // state variables for filtered restaurents cards with search

    const [searchText, setSearchText] = useState("");
    console.log(searchText);

    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = async () => {
        const data = await fetch(CARDS_API);
        const json = await data.json();
        // fetched from swiggy API and pass in below setResList
        //Optional chaining '?' we need to use with name space 
        setResList(json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
        setFilteredRestaurant(json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
    };

    // if(ResList.length === 0){            Conditional rendering shimmer
    //     return <h1><ShimmerRC/></h1>
    // };
    // if ResList.length is 0 then ('?'-'tumery oprator') render <ShimmerRC ':'- otherwise follows
    return (ResList.length === 0) ? (<ShimmerRC />) : (
        <div className="body">
            <div className="filter">
                <button className="filter-btn" onClick={() => {
                    const filterList = ResList.filter(
                        (res) => res.info.avgRating === 4
                    );
                    setResList(filterList);
                }}
                >Top Rated Button</button>
                <div className="search">
                    <input type="text"
                           className="search-box" 
                           value={searchText} 
                           onChange={(e) => {
                            setSearchText(e.target.value)
                           }}/>
                    <button className="search-but" onClick={() => {
                        // filter the restrs cards and update ui
                        // searchText
                        const filteredRestaurant = ResList.filter((res) => 
                            res.info.name.toLowerCase().includes(searchText.toLowerCase())   // path of the document
                        );
                        setFilteredRestaurant(filteredRestaurant);
                    }}
                    >Search</button>
                </div>
            </div>
            <div className="res-container">
                {filteredRestaurant.map((restra) => (     //using map function
                <Link key={restra.info.id} to={"/restaurants/" + restra.info.id}><RestaurantCard resData={restra} /></Link>
                ))}
            </div>
        </div>
    );
};
export default Body;