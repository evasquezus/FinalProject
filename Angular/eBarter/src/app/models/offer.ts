import { User } from 'src/app/models/user';
import { Item } from './item';
export class Offer {
  id: number;
  description: string;
  item: Item;
  offerStatus: number;
  user: User;
  imgUrl: string;


  constructor (
    id: number,
    description: string,
    item: Item = null,
    // offerStatus: number,
    offerStatus: number = 1,
    user: User,
    imgUrl: string

  ) {
    this.id = id;
    this.description = description;
    this.item = item;
    this.offerStatus = offerStatus;
    this.user = user;
    this.imgUrl = imgUrl;

    }
}
