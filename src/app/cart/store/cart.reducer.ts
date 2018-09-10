import {MusicItem} from '../musicItem';
import {CartActions, CartActionTypes} from './cart.actions';
import {ShoppingCart} from '../cart';

export interface ShoppingCart{
  musicItem:MusicItem[],
  totalCount:number,
  totalSum:number
}

const initialState:ShoppingCart={
  musicItem:[],
  totalCount:0,
  totalSum:0
}

function updateMusicItem(state: ShoppingCart, payload: MusicItem) {

  // @ts-ignore
  let targetItem = state["musicItem"].find(item => item.trackId === payload.trackId);

  if (targetItem) { //If musicObject already Exist
    payload.count++;
    payload.sum+=payload.trackPrice*payload.count;
    console.log( payload.sum);
  }
  else {
    // @ts-ignore
    state.musicItem.push(payload);
    payload.count=1;
    payload.sum=payload.trackPrice*payload.count;
    console.log( payload.sum);
    }
}


export function cartReducer(state=initialState,action: CartActions):ShoppingCart{
  switch (action.type) {
    case CartActionTypes.AddToCart:
        updateMusicItem(state,action.payload);
        return addToCart(state, action.payload);

    case CartActionTypes.DeleteItem:

      return deleteFromCart(state, action.payload);

      case CartActionTypes.ClearCart:
        state.totalCount = 0;
        state.totalSum = 0;
        state.musicItem = [];
        return state;

      default:
      return state;
  }
}


export function addToCart(state:ShoppingCart,payload:MusicItem){
  return{
    ...state,
    totalCount:state.totalCount+1,
    totalSum:state.totalSum+payload.trackPrice*1,
     }
}


export function deleteFromCart(state:ShoppingCart,payload:MusicItem){
  return{
    ...state,
    totalCount:state.totalCount-1,
    totalSum:state.totalSum-payload.trackPrice*1,
  }
}
