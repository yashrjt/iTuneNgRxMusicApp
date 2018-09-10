import {ShoppingCart} from './cart';
import {MusicItem} from './musicItem';

export class ShoppingCartClass implements ShoppingCart{
  musicItem: MusicItem[];
  totalCount: number;
  totalSum: number;

  constructor(){
    this.musicItem=[];
    this.totalCount=0;
    this.totalSum=0;
  }
}
