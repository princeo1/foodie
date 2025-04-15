import RestaurantCard , {withOnlineLabel} from "./RestaurantCard";
import {useState,useEffect} from 'react';
// import resList from "../utils/MockData";
import Shimmer from "./Shimmer";
import {Link} from 'react-router';
import useOnlineStatus from "../utils/useOnlineStatus";

 const Body = () => {
    const [ListOfRestaurant, setListOfRestaurant] = useState([]);
    const [filteredRestaurant, setfilteredRestaurant] = useState([])
    const [searchText, setsearchText] = useState('');

    const RestaurantIsOnline = withOnlineLabel(RestaurantCard); // this will return a new component and this is how we make this function a component
    useEffect(() => {
        fetchData();
    },[])
    const fetchData = async () => {
        const data = await fetch('https://thingproxy.freeboard.io/fetch/https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9715987&lng=77.5945627&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING');
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
        <div className="flex my-4 justify-around flex-wrap">
            <div>
                <input className="mx-4 rounded-lg px-4 border border-black h-10"type="text" onChange={(e)=>setsearchText(e.target.value)}/>
                <button
                    className="rounded-lg px-4 cursor-pointer border h-10 hover:bg-green-200"
                    onClick={()=> {
                        const filteredResList = ListOfRestaurant.filter((res) => res.info.name.toLowerCase().includes(searchText.toLowerCase()))
                        setfilteredRestaurant(filteredResList)
                    }}
                >Search</button>
            </div>
            <div>
                <button
                className="border border-black px-4 rounded-lg cursor-pointer h-10 hover:border-green-300"
                onClick={() => {
                    const filteredList = ListOfRestaurant.filter(
                        (res) => res.info.avgRating > 4.3
                    );
                    console.log(filteredList)
                    setfilteredRestaurant(filteredList)
                }}
                >
                    Filter Restaurant Rating {'>'} 4.3
                </button>
                <button
                className="border border-black px-4 rounded-lg cursor-pointer h-10 hover:border-green-300 ml-2"
                onClick={() => {
                    setfilteredRestaurant(ListOfRestaurant);
                }}
                >
                See all restaurants
                </button>
            </div>
            
        </div>
        <div className="flex flex-wrap justify-center">
            {
                filteredRestaurant.map( (restuarant)=> (
                    <Link key={restuarant.info.id} to={"/restaurant/"+restuarant.info.id}>
                        {/* if restaurant is online then show higher order component instaed */
                        restuarant.info.isOpen ? <RestaurantIsOnline resData={restuarant}/> : <RestaurantCard resData={restuarant}/>
                        }
                    </Link>
                ))
            }
        </div>
    </div>
    
}
export default Body;