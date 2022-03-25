import { Request, Response, Router } from 'express';
import { UserController } from '../controllers';

const router = Router();

const userController = new UserController();

router.get(
  '/',
  async (req: Request, res: Response) =>
    await userController.getAllUsers(req, res),
);

router.post('/',
   userController.create,
);

export default router;
