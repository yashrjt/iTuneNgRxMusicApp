import * as fromCart from './cart.reducer';
import {createFeatureSelector, createSelector} from '@ngrx/store';



/*const getMusicFeatureState = createFeatureSelector<fromCart.CartState>('cart');*/
const getMusicFeatureState = createFeatureSelector<fromCart.ShoppingCart>('cart');

export const getCartItems = createSelector(
  getMusicFeatureState,
  state => state.musicItem
);
export const getCount = createSelector(
  getMusicFeatureState,
  state => state.totalCount
);

export const getSum = createSelector(
  getMusicFeatureState,
  state => state.totalSum
)

