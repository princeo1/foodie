import RestaurantCard from "./RestaurantCard";
import {useState,useEffect} from 'react';
import resList from "../utils/MockData";

 const Body = () => {
    const [ListOfRestaurant, setListOfRestaurant] = useState(resList);
    useEffect(() => {
        fetchData();
    },[])
    const fetchData = async () => {
        const data = await fetch('https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9715987&lng=77.5945627&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING');
        const json = await data.json();
        setListOfRestaurant(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
    }
    return <div className="body">
        <div className="filter">
            <button
            className="filter-btn"
            onClick={() => {
                const filteredList = ListOfRestaurant.filter(
                    (res) => res.info.avgRating > 4
                );
                setListOfRestaurant(filteredList)
            }}
            >
                Top Reated Restaurant
            </button>
        </div>
        <div className="card-container">
            {
                ListOfRestaurant.map( (restuarant)=> (
                    <RestaurantCard key={restuarant.info.id} resData={restuarant}/>
                ))
            }
        </div>
    </div>
    
}
export default Body;