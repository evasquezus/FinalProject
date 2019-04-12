export class Offer {
  id: number;
  itemId: number;
  description: string;
  offerStatusId: number;
  offerImageId: number;

  constructor (
    id?: number,
    itemId?: number,
    description?: string,
    offerStatusId?: number,
    offerImageId?: number
  ) {
    this.id = id;
    this.itemId = itemId;
    this.description = description;
    this.offerStatusId = offerStatusId;
    this.offerImageId = offerImageId;
    }
}
