import Shimmer from "./Shimmer";
import { useParams } from "react-router";
import useResInfo from "../utils/useResInfo";

const RestaurantMenu = () => {
    const params = useParams();
    const {resId} = params;
    const resInfo = useResInfo(resId);
    console.log(resInfo)

    return resInfo == null ? <Shimmer/> :(<div>
        <h1>{resInfo.name}</h1>
        <h3>{resInfo.cuisines.join(', ')}</h3>
        <h3>{resInfo.costForTwoMessage}</h3>
    </div>);
}

export default RestaurantMenu;