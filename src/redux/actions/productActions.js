import { ActionTypes } from "../constants/action-types";

export const setProducts = (products ) =>  {
      return {
          type : ActionTypes.SET_PRODUCTS,
          payload: products,
      }
}

export const SelectedProduct = (product ) =>  {
    return {
        type : ActionTypes.SELECTED_PRODUCT,
        payload: product,
    }
}
