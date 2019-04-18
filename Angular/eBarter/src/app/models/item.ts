import { User } from './user';
import { Offer } from './offer';

export class Item {
  id?: number;
  description?: string;
  name?: string;
  itemStatus?: number;
  user?: User;
<<<<<<< HEAD
  // imageUrl?: string
=======
  imageUrl?: string
>>>>>>> parent of eb45101... Most of the conflicts fixed item Status not working agian
  offers?: Offer [];
  imageUrl?: string;


  constructor(
    id?: number,
    description?: string,
    name?: string,
    itemStatus?: number,
    user?: User,
    offers?: Offer [],
    imageUrl?: string
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
    this.imageUrl = imageUrl;
  }

}

