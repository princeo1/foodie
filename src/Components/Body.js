import RestaurantCard from "./RestaurantCard";
import {useState,useEffect} from 'react';
// import resList from "../utils/MockData";
import Shimmer from "./Shimmer";
import {Link} from 'react-router';
import useOnlineStatus from "../utils/useOnlineStatus";

 const Body = () => {
    const [ListOfRestaurant, setListOfRestaurant] = useState([]);
    const [filteredRestaurant, setfilteredRestaurant] = useState([])
    const [searchText, setsearchText] = useState('');
    useEffect(() => {
        fetchData();
    },[])
    const fetchData = async () => {
        const data = await fetch('https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9715987&lng=77.5945627&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING');
        const json = await data.json();
        console.log(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
        setListOfRestaurant(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
        setfilteredRestaurant(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
    }

    const onlineStatus = useOnlineStatus();

    if(onlineStatus === false) {
        return <div>
            <h1>Looks like you are offline !!! Please check your internet connection </h1>
        </div>
    }

    return filteredRestaurant.length === 0 ? <Shimmer/> :<div className="body">
        <div className="filter">
            <input type="text" onChange={(e)=>setsearchText(e.target.value)}/>
            <button
                className="search-btn"
                onClick={()=> {
                    const filteredResList = ListOfRestaurant.filter((res) => res.info.name.toLowerCase().includes(searchText.toLowerCase()))
                    setfilteredRestaurant(filteredResList)
                }}
            >Search</button>
            <button
            className="filter-btn"
            onClick={() => {
                const filteredList = ListOfRestaurant.filter(
                    (res) => res.info.avgRating > 4.5
                );
                setListOfRestaurant(filteredList)
            }}
            >
                Top Reated Restaurant
            </button>
        </div>
        <div className="card-container">
            {
                filteredRestaurant.map( (restuarant)=> (
                    <Link key={restuarant.info.id} to={"/restaurant/"+restuarant.info.id}><RestaurantCard resData={restuarant}/></Link>
                ))
            }
        </div>
    </div>
    
}
export default Body;