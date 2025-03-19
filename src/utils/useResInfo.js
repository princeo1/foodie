import { RES_URL_POST , RES_URL_PRE } from "./constants";
import { useState,useEffect } from "react";

const useResInfo = (resId) => {
    const [resInfo, setresInfo] = useState(null);
    useEffect(()=>{
        fetchData();
    },[])
    const fetchData = async () => {
        const data = await fetch(RES_URL_PRE + resId + RES_URL_POST);
        const json = await data.json();
        setresInfo(json?.data?.cards[2]?.card?.card?.info)
    }
    return resInfo;
}

export default useResInfo;