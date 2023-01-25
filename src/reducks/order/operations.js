import API from "../../API";
import App from "../../App";
import { addOrderAction } from "./actions";

const api = new API();

export const addOrder = (params) => {
    return async (dispatch) => {
        console.log('params', params);
        return api 
            .orderAdd(params)
            .then((order)=>{
                dispatch(addOrderAction(order));
            })
            .catch((error)=>{
                alert('Failed to connect to api to add order')
                console.log(error)
            })
    }
}