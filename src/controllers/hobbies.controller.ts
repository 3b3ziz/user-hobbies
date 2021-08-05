import { NextFunction, Request, Response } from 'express';
import { CreateHobbyDto } from '@dtos/hobbies.dto';
import { Hobby } from '@interfaces/hobbies.interface';
import hobbyService from '@services/hobbies.service';
import UserService from '@/services/users.service';

class HobbiesController {
  public hobbyService = new hobbyService();
  public userService = new UserService();

  public createHobby = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const userId = req.params.userId;
      const hobbyData: CreateHobbyDto = req.body;
      const createHobbyData: Hobby = await this.hobbyService.createHobby(hobbyData);

      await this.userService.assignHobby(userId, createHobbyData._id);

      res.status(201).json({ data: createHobbyData, message: 'created' });
    } catch (error) {
      next(error);
    }
  };

  public deleteHobby = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const userId = req.params.userId;
      const hobbyId: string = req.params.id;
      const deleteHobbyData: Hobby = await this.hobbyService.deleteHobby(hobbyId);

      await this.userService.unassignHobby(userId, deleteHobbyData._id);

      res.status(200).json({ data: deleteHobbyData, message: 'deleted' });
    } catch (error) {
      next(error);
    }
  };
}

export default HobbiesController;
