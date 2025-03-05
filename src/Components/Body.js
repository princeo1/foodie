import RestaurantCard from "./RestaurantCard";
import {useState,useEffect} from 'react';
import resList from "../utils/MockData";


const ListOfRestaurantJs = [
    {
        "info": {
        "id": "741531",
        "name": "Burger King",
        "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2025/3/1/9daf615c-b012-4e20-a431-83d143313108_741531.jpg",
        "locality": "Siliguri",
        "areaName": "City Centre Mall",
        "costForTwo": "₹350 for two",
        "cuisines": [
        "Burgers",
        "American"
        ],
        "avgRating": 3.9,     
        }
    },
    {
        "info": {
        "id": "741532",
        "name": "Dominos",
        "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2025/3/1/9daf615c-b012-4e20-a431-83d143313108_741531.jpg",
        "locality": "Siliguri",
        "areaName": "City Centre Mall",
        "costForTwo": "₹350 for two",
        "cuisines": [
        "Burgers",
        "American"
        ],
        "avgRating": 4.4,     
        }
    },
    {
        "info": {
        "id": "741533",
        "name": "KFC",
        "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2025/3/1/9daf615c-b012-4e20-a431-83d143313108_741531.jpg",
        "locality": "Siliguri",
        "areaName": "City Centre Mall",
        "costForTwo": "₹350 for two",
        "cuisines": [
        "Burgers",
        "American"
        ],
        "avgRating": 4.2,   
        }
    }
]

 const Body = () => {
    // const [ListOfRestaurant, setListOfRestaurant] = useState([
    //     {
    //         "info": {
    //         "id": "741531",
    //         "name": "Burger King",
    //         "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2025/3/1/9daf615c-b012-4e20-a431-83d143313108_741531.jpg",
    //         "locality": "Siliguri",
    //         "areaName": "City Centre Mall",
    //         "costForTwo": "₹350 for two",
    //         "cuisines": [
    //         "Burgers",
    //         "American"
    //         ],
    //         "avgRating": 3.9,     
    //         }
    //     },
    //     {
    //         "info": {
    //         "id": "741532",
    //         "name": "Dominos",
    //         "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2025/3/1/9daf615c-b012-4e20-a431-83d143313108_741531.jpg",
    //         "locality": "Siliguri",
    //         "areaName": "City Centre Mall",
    //         "costForTwo": "₹350 for two",
    //         "cuisines": [
    //         "Burgers",
    //         "American"
    //         ],
    //         "avgRating": 4.4,     
    //         }
    //     },
    //     {
    //         "info": {
    //         "id": "741533",
    //         "name": "KFC",
    //         "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2025/3/1/9daf615c-b012-4e20-a431-83d143313108_741531.jpg",
    //         "locality": "Siliguri",
    //         "areaName": "City Centre Mall",
    //         "costForTwo": "₹350 for two",
    //         "cuisines": [
    //         "Burgers",
    //         "American"
    //         ],
    //         "avgRating": 4.2,   
    //         }
    //     }
    // ])
    const [ListOfRestaurant, setListOfRestaurant] = useState(resList);
    useEffect(() => {
        fetchData();
    },[])
    const fetchData = async () => {
        const data = await fetch('https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9715987&lng=77.5945627&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING');
        const json = await data.json();
        setListOfRestaurant(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
        // console.log(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
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