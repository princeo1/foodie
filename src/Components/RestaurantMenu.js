import Shimmer from "./Shimmer";
import { useParams } from "react-router";
import useResInfo from "../utils/useResInfo";

const RestaurantMenu = () => {
    const params = useParams();
    const {resId} = params;
    const resInfo = useResInfo(resId);
    console.log(resInfo)
    let data = resInfo == null ? [] :resInfo[2];
    console.log(data.length == 0 ? [] : data?.card?.card?.info);
    const { name , cuisines , costForTwoMessage } = data.length == 0 ? [] : data?.card?.card?.info;

    return resInfo === null ? <Shimmer/>:<div>
        <h1>{name}</h1>
        <h3>{cuisines.join(', ')}</h3>
        <h3>{costForTwoMessage}</h3>
    </div>;
}

export default RestaurantMenu;