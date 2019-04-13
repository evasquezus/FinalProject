export class Address {
  id: number;
  street: string;
  street2: string;
  city: string;
  state: string;
  zipCode: number;
  phone: number;

  constructor(
    id?: number,
    street?: string,
    street2?: string,
    city?: string,
    state?: string,
    zipCode?: number,
    phone?: number,
  ) {
    this.id = id;
    this.street = street;
    this.street2 = street2;
    this.city = city;
    this.state = state;
    this.zipCode = zipCode;
    this.phone = phone;
  }
}
