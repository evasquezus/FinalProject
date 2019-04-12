export class User {
  id: number;
  userName: string;
  password: string;
  active: boolean;
  firstName: string;
  lastName: string;
  email: string;
  registerDate: Date;
  roleId: number;
  addressId: number;
  authenticated: boolean;

  constructor(
    id?: number,
    userName?: string,
    password?: string,
    active?: boolean,
    firstName?: string,
    lastName?: string,
    email?: string,
    registerDate?: Date,
    roleId?: number,
    addressId?: number,
    authenticated?: boolean) {
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
    }
}
