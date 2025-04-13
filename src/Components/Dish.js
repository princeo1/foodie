import { useDispatch } from "react-redux";
import { addItem } from "../utils/cardSlice";

const Dish = (props) => {
    const dispatch = useDispatch();
    const handleAddItem = () => {
        dispatch(addItem(props))
    }
    const {name,price,description,imageLink} = props
    return (
        <div className="flex px-4 py-2 cursor-pointer rounded-2xl rounded-t-2xl">
            <div className="w-8/12 border-b-2">
                <h1 className="font-bold">{name}</h1>
                <h2 className="font-medium">₹{price}</h2>
                {<h3 className="font-mono overflow-auto">{description}</h3>}
            </div>
            <div className="w-4/12 flex justify-center">
                <img src={imageLink} className="w-[100px] h-[100px] m-2 rounded-lg"/>
                <button
                    onClick={handleAddItem}
                    className="font-red cursor-pointer text-white bg-black absolute rounded-lg p-1 hover:bg-red-500"
                >
                    add +
                </button>
            </div>
        </div>
    )
}

export default Dish;