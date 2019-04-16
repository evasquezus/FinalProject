import { User } from './user';

export class Item {
  id: number;
  name: string;
  description: string;
  endDate: Date;
  isActive: boolean;
  user: User;
  categoryId: number;
  itemImageId: number;

  constructor(
    id?: number,
    name?: string,
    description?: string,
    endDate?: Date,
    isActive?: boolean,
    user?: User,
    categoryId?: number,
    itemImageId?: number,
  ) {
    this.id = id;
    this.name = name;
    this.description = description;
    this.endDate = endDate;
    this.isActive = isActive;
    this.user= user;
    this.categoryId = categoryId;
    this.itemImageId = itemImageId;
  }

}
