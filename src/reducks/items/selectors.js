import { createSelector } from "reselect";

const ItemSelector = (state) => state.items;

export const getItems = createSelector([ItemSelector], (state) => state.list);