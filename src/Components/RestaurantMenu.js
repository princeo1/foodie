import Shimmer from "./Shimmer";
import { useParams } from "react-router";
import useResInfo from "../utils/useResInfo";
import Dish from "./Dish";
import { DISH_URL } from "../utils/constants";
import DropdownDishContainer from "./DropdownDishContainer";
import { useState } from "react";

const RestaurantMenu = () => {
    const [showDishes, setShowDishes] = useState(false)
    const handleClick = () => {
        setShowDishes(!showDishes);
    }
    const params = useParams();
    const {resId} = params;
    const resInfo = useResInfo(resId);
    console.log(resInfo)
    let data1 = resInfo == null ? [] :resInfo[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards;
    // console.log(data.length == 0 ? [] : data?.card?.card?.info);
    // console.log("data1",data1)
    const list = data1.filter((item)=>{
        if(item?.card?.card?.title) return item
    })
    // console.log(list)
    // const { name , cuisines , costForTwoMessage } = data.length == 0 ? [] : data?.card?.card?.info;

    return resInfo === null ? <Shimmer/>:
        <div className="flex justify-center">
            <div className="w-8/12">
            <h1 className="text-4xl font-bold text-center my-4">{resInfo[2]?.card?.card?.info?.name}</h1>
            {/* <h2 className="text-lg font-medium text-center my-4">{resInfo[2]?.card?.card?.info?.costForTwoMessage}</h2> */}
            {list.map((item)=>{
                const data2 = item?.card?.card?.categories || item?.card?.card?.itemCards;
                // console.log(index,data2)
                return (
                    // <DropdownDishContainer heading={item?.card?.card?.title} />
                    <div className="my-4 shadow-lg">
                        <div className="w-full flex justify-between bg-gray-200 p-2 cursor-pointer"
                            onClick={handleClick}
                        >
                            <h1 className="font-bold">{item?.card?.card?.title}</h1>
                            <span>&#11167;</span>
                        </div>
                    {   showDishes && <div>
                        {
                            item?.card?.card?.hasOwnProperty('itemCards') ?
                            <div>
                                {
                                    item?.card?.card?.itemCards.map((dish)=> {
                                        return <Dish className="border-b-gray-300" name={dish?.card?.info?.name} price={dish?.card?.info?.price /100 || dish?.card?.info?.defaultPrice /100} description={dish?.card?.info?.description} imageLink={DISH_URL+dish?.card?.info?.imageId}/>   
                                    })
                                }
                            </div> :
                            <div className="p-2"> 
                            {
                                data2.map((curr)=>{
                                    return <DropdownDishContainer heading={curr?.title} dishList={curr.itemCards}/>
                                })
                            }
                            </div>
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