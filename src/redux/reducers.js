import { ADD_PRODUCT, REMOVE_PRODUCT, SET_PRODUCT, UPDATE_PRODUCT } from "./actions";

const initialState = {
  products: [],
};

const productsReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_PRODUCT:
      return { ...state, products: [...state.products, action.payload] };
    case REMOVE_PRODUCT:
      return {
        ...state,
        products: state.products.filter(
          (product) => product.id !== action.payload
        ),
      };
    case UPDATE_PRODUCT:
      return {
        ...state,
        products: state.products.map((product) =>
          product.id === action.payload.id
            ? { ...product, ...action.payload }
            : product
        ),
      };
    case SET_PRODUCT:
      return { ...state, products: action.payload };
    default:
      return state;
  }
};

export default productsReducer;
