import { DECREMENT_COUNTER, INCREMENT_COUNTER } from "../../actionTypes";

export const incrementCounterAction = (dispatch) => () => dispatch({type: INCREMENT_COUNTER});
export const decrementCounterAction = (dispatch) => () => dispatch({type: DECREMENT_COUNTER});
