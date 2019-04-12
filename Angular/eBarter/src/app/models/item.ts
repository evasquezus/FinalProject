export class Item {
  id: number;
<<<<<<< HEAD
  name: string;
  description: string;
  endDate: string;
  isActive: boolean;
  userId: number;
  categoryId: number;
  itemImageId: number;

  constructor (
    id?: number,
    name?: string,
    description?: string,
    endDate?: string,
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
=======
  description: string;
  name: string;
  endDate?: Date;
  isActive?: boolean;
  sellerId: number;
  category?: number;
  imageUrl?: string;
>>>>>>> fe556d397fd76313e2bfbd763c8351cf81dee8cb
}
