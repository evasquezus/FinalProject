import { User } from 'src/app/models/user';
import { Item } from './item';
export class Offer {
  id: number;
  description: string;
  user: User;
  item: Item;


  constructor (
    id: number,
    description: string,
    user: User,
    item: Item = null,

  ) {
    this.id = id;
    this.description = description;
    this.user = user;
    this.item = item;

    }
}
