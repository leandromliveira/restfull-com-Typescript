import { IUser } from '../interfaces';
import { UserModel } from '../models';
import connection from '../models/connection';

export default class UserService {
  public model: UserModel;
  constructor() {
    this.model = new UserModel(connection);
  }

  public async getAllUsers(): Promise<IUser[]> {
    const users = await this.model.getAll();
    return users;
  }

  public create(user: IUser): Promise<IUser> {
    return this.model.create(user);
  }
}
