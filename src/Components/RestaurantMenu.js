import Shimmer from "./Shimmer";
import { useParams } from "react-router";
import useResInfo from "../utils/useResInfo";
import Dish from "./Dish";
import { DISH_URL } from "../utils/constants";

const RestaurantMenu = () => {
    const params = useParams();
    const {resId} = params;
    const resInfo = useResInfo(resId);
    // console.log(resInfo)
    let data = resInfo == null ? [] :resInfo[2];
    let data1 = resInfo == null ? [] :resInfo[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards;
    // console.log(data.length == 0 ? [] : data?.card?.card?.info);
    // console.log("data1",data1)
    const list = data1.filter((item)=>{
        if(item?.card?.card?.title) return item
    })
    console.log(list)
    // const { name , cuisines , costForTwoMessage } = data.length == 0 ? [] : data?.card?.card?.info;

    return resInfo === null ? <Shimmer/>:<div className="flex justify-center">
            <div className="w-8/12">
            {list.map((item,index)=>{
                const data2 = item?.card?.card?.categories || item?.card?.card?.itemCards;
                console.log(index,data2)
                return (
                    <div className="my-4 shadow-lg">
                        <div className="w-full flex justify-between bg-gray-200 p-2">
                            <h1 className="font-bold">{item?.card?.card?.title}</h1>
                            <span>&#11167;</span>
                        </div>
                        {
                            item?.card?.card?.hasOwnProperty('itemCards') ? 
                            <div>
                                {
                                    item?.card?.card?.itemCards.map((dish)=> {
                                        return <Dish className="border-b-gray-300" name={dish?.card?.info?.name} price={dish?.card?.info?.price /100 || dish?.card?.info?.defaultPrice /100} description={dish?.card?.info?.description} imageLink={DISH_URL+dish?.card?.info?.imageId}/>   
                                    })
                                }
                            </div> : 
                            <div>
                            {
                                data2.map((curr)=>{
                                    return <p>{curr.title}</p>
                                })
                            }
                            </div>
                        }
                    </div>
                )
            })}
            </div>
    </div>;
}

export default RestaurantMenu;