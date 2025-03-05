import { CDN_URL } from "../utils/constants";
const RestaurantCard = (props) => {
    // console.log(props)
    const {name,cuisines,avgRating,costForTwo,cloudinaryImageId} = props.resData.info
    // const {resData} = props;
    // console.log(resData.info.name)
    return <div className="card">
        <img src={CDN_URL + cloudinaryImageId}
        alt="food"
        className="card-img"
        />
        <h3>{name}</h3>
        <h4>{cuisines.join(', ')}</h4>
        <h4>{avgRating} stars</h4>
        <h4>{costForTwo}</h4>
    </div>
}
export default RestaurantCard;