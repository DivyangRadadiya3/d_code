import { useSelector,useDispatch } from "react-redux";
// import {useState} from "react";
import {getData} from "./Action/index.js"

const dispatch = useDispatch();
async function Api() {
    try {
        const res = await axios.get('https://data.covid19india.org/data.json');
        console.log(res.data.statewise);
        dispatch(getData(res.data.statewise));
    } catch (error) {
        console.log(error);
    }
}

export default Api;