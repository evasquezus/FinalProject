export class Item {
  id: number;
  name: string;
  description: string;
  endDate: Date;
  isActive: boolean;
  userId: number;
  categoryId: number;
  itemImageId: number;

  constructor (
    id?: number,
    name?: string,
    description?: string,
    endDate?: Date,
    isActive?: boolean,
    userId?: number,
    categoryId?: number,
    itemImageId?: number,
  ) {
    this.id = id;
    this.name = name;
    this.description = description;
    this.endDate = endDate;
    this.isActive = isActive;
    this.userId = userId;
    this.categoryId = categoryId;
    this.itemImageId = itemImageId;
  }
}
