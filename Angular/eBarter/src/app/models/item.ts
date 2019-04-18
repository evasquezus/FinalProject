import { User } from './user';
import { Offer } from './offer';

export class Item {
  id?: number;
  description?: string;
  name?: string;
  itemStatus?: number;
  user?: User;
  imageUrl?: string
  offers?: Offer [];

  constructor(
    id?: number,
    description?: string,
    name?: string,
    itemStatus?: number,
    user?: User,
    imageUrl?: string,
    offers?: Offer []
  ) {
    this.id = id;
    this.description = description;
    this.name = name;
    this.itemStatus = itemStatus;
    this.user = user;
    this.imageUrl = imageUrl;
    this.offers = offers;
  }

}
