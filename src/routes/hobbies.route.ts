import { Router } from 'express';
import HobbiesController from '@controllers/hobbies.controller';
import { CreateHobbyDto } from '@dtos/hobbies.dto';
import { Routes } from '@interfaces/routes.interface';
import validationMiddleware from '@middlewares/validation.middleware';

class HobbiesRoute implements Routes {
  public path = '/users/:userId/hobbies';
  public router = Router();
  public hobbiesController = new HobbiesController();

  constructor() {
    this.initializeRoutes();
  }

  private initializeRoutes() {
    // validate id as mongo id not to throw error from mongoose.
    this.router.post(`${this.path}`, validationMiddleware(CreateHobbyDto, 'body'), this.hobbiesController.createHobby);
    this.router.delete(`${this.path}/:id`, this.hobbiesController.deleteHobby);
  }
}

export default HobbiesRoute;
