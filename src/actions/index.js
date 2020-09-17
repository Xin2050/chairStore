import Mark2Win from "../apis/Mark2Win";
import {FETCH_PRODUCTS} from "./types";



export const fetchProducts = () => async distpath => {
    const response = await Mark2Win.get('/product');
    distpath({type:FETCH_PRODUCTS,payload:response.data});
}