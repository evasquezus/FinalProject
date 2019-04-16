import { User } from 'src/app/models/user';
export class Offer {
  id: number;
  itemId: number;
  description: string;
  offerStatusId: number;
  offerImageId: number;
  user: User;


  constructor (
    id?: number,
    itemId?: number,
    description?: string,
    offerStatusId?: number,
    user?: User,

  ) {
    this.id = id;
    this.itemId = itemId;
    this.description = description;
    this.offerStatusId = offerStatusId;
    // this.offerImageId = offerImageId;
    this.user = user;

    }
}
