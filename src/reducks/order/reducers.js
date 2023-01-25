import * as Actions from "./actions";
import initialState from "../store/initialState";

export const OrderReducer = (state = initialState.order, action) => {
    switch(action.type) {
        case Actions.ADD_ORDER:
            return {
                list: action.list,
                subtota: action.subtotal,
            }
        default:
            return state;
    }
}