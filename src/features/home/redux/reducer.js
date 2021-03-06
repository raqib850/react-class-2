import initialState from './initialState';
import { reducer as setProductInFocus } from './setProductInFocus';
import { reducer as setCartItem } from './setCartItem';
import { reducer as setWishlistItem } from './setWishlistItem';

const reducers = [setProductInFocus, setCartItem, setWishlistItem];

export default function reducer(state = initialState, action) {
  let newState;
  switch (action.type) {
    // Handle cross-topic actions here
    default:
      newState = state;
      break;
  }
  /* istanbul ignore next */
  return reducers.reduce((s, r) => r(s, action), newState);
}
