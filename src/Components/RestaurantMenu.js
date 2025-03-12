import { useEffect,useState } from "react";
import { RES_URL_POST , RES_URL_PRE } from "../utils/constants";
import Shimmer from "./Shimmer";
import { useParams } from "react-router";

const RestaurantMenu = () => {
    const params = useParams();
    const {resId} = params;
    console.log(params)
    const [resInfo, setresInfo] = useState(null);
    useEffect(() => {
        getResInfo();
    },[])
    const getResInfo = async () => {
        const data = await fetch(RES_URL_PRE + resId + RES_URL_POST);
        const json = await data.json();
        console.log(json.data)
        setresInfo(json?.data?.cards[2]?.card?.card?.info)
    }

    // const { name , cuisines , cloudinaryImageId, costForTwoMessage } = resInfo

    return resInfo === null ? <Shimmer/> :(<div>
        <h1>{resInfo.name}</h1>
        <h3>{resInfo.cuisines.join(', ')}</h3>
        <h3>{resInfo.costForTwoMessage}</h3>
    </div>);
}

export default RestaurantMenu;