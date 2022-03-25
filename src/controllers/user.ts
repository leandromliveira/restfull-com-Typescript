// import { StatusCodes } from 'http-status-codes';
import { UserService } from '../services';
import {Response, Request} from 'express';

export default class UserController {
  constructor(private userService = new UserService()) {}

  public getAllUsers = async (_req: Request, res: Response) => {
    const result = await this.userService.getAllUsers();
    return res.status(200).json(result);
  }

  public create = async (req: Request, res: Response) => {
    const user = req.body;

    const userCreated = await this.userService.create(user);
    res.status(201).json(userCreated);
  }
}
