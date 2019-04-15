import { Address } from './address';
import { Role } from './role';

export class User {
  id: number;
  username: string;
  password: string;
  enabled: boolean;
  firstName: string;
  lastName: string;
  email: string;
  registerDate: string;
  roleId: number;
  addressId: number;
  authenticated: boolean;
  address: Address;
  role: Role;

  constructor(
    id?: number,
    userName?: string,
    password?: string,
    enabled?: boolean,
    firstName?: string,
    lastName?: string,
    email?: string,
    registerDate?: string,
    authenticated?: boolean,
    role?: Role,
    address?: Address) {
      this.id = id;
      this.username = userName;
      this.password = password;
      this.enabled = enabled;
      this.firstName = firstName;
      this.lastName = lastName;
      this.email = email;
      this.registerDate = registerDate;
      this.role = role;
      // this.addressId = addressId;
      this.authenticated = authenticated;
      this.address = address;
    }
}
