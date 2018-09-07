import { Action } from '@ngrx/store';


export enum CartActionTypes {
  AddToCart = 'Add To Cart',
  DeleteItem = 'Delete Item',
  ClearCart = 'Clear Cart'
}

export class AddToCart implements Action {
  readonly type = CartActionTypes.AddToCart;
  constructor(public payload: any) { }
}
export class ClearCart implements Action {
  readonly type = CartActionTypes.ClearCart;

}
export class DeleteItem implements Action {
  readonly type = CartActionTypes.DeleteItem;
  constructor(public payload: any) { }
}

export type CartActions = AddToCart | DeleteItem | ClearCart ;
