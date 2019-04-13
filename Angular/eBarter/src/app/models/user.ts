import { Address } from './address';

export class User {
  id: number;
  userName: string;
  password: string;
  active: boolean;
  firstName: string;
  lastName: string;
  email: string;
  registerDate: string;
  roleId: number;
  addressId: number;
  authenticated: boolean;
  address: Address;

  constructor(
    id?: number,
    userName?: string,
    password?: string,
    active?: boolean,
    firstName?: string,
    lastName?: string,
    email?: string,
    registerDate?: string,
    roleId?: number,
    addressId?: number,
    authenticated?: boolean,
    address?: Address) {
      this.id = id;
      this.userName = userName;
      this.password = password;
      this.active = active;
      this.firstName = firstName;
      this.lastName = lastName;
      this.email = email;
      this.registerDate = registerDate;
      this.roleId = roleId;
      this.addressId = addressId;
      this.authenticated = authenticated;
      this.address = address;
    }
}
