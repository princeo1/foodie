import { CDN_URL } from "../utils/constants";
const RestaurantCard = (props) => {
    const {name,cuisines,avgRating,costForTwo,cloudinaryImageId} = props.resData.info


    return <div className="card bg-gray-100 m-4 w-[300px] rounded-lg h-[500px]">
        <img src={CDN_URL + cloudinaryImageId}
        alt="food"
        className="rounded-t-lg h-3/5 w-full"
        />
        <div className="ml-4 mt-2 font-[Gilroy]">
        <h3 className="text-2xl font-bold">{name}</h3>
        <h4 className="font-[Gilroy]">{cuisines.join(', ')}</h4>
        <h4>{avgRating} stars</h4>
        <h4>{costForTwo}</h4>
        </div>
    </div>
}
export default RestaurantCard;