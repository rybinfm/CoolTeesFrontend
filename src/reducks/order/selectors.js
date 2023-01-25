import { createSelector } from "reselect";
const orderSelector = (state) => state.order;

export const getOrders = createSelector(
    [ordersSelector],
    (state) => state.list
)