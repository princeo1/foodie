import Dish from "./Dish";
import { DISH_URL } from "../utils/constants";
import {useState} from 'react'

const DropdownDishContainer = (props) => {
    const [showDishes, setShowDishes] = useState(false); 
    const {heading, dishList} = props;
    console.log("this is prop",props);
    const handleClick = () => {
        setShowDishes(!showDishes);
    }
    return (
        <div className="m-4">
            <div className="w-full flex justify-between bg-gray-100 p-2"
            onClick={handleClick}
            >
                <h1 className="font-bold">{heading}</h1>
                <span>&#11167;</span>
            </div>
            {showDishes && <div className="cursor-pointer">
            {dishList.map((dish)=> {
                return <Dish className="border-b-gray-300" name={dish?.card?.info?.name} price={dish?.card?.info?.price /100 || dish?.card?.info?.defaultPrice /100} description={dish?.card?.info?.description} imageLink={DISH_URL+dish?.card?.info?.imageId}/>   
            })}
            </div>}
        </div>
    )
}
export default DropdownDishContainer;