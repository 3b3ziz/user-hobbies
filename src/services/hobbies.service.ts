import { CreateHobbyDto } from '@dtos/hobbies.dto';
import { HttpException } from '@exceptions/HttpException';
import { Hobby } from '@interfaces/hobbies.interface';
import hobbyModel from '@models/hobbies.model';
import { isEmpty } from '@utils/util';

class HobbyService {
  public hobbies = hobbyModel;

  public async createHobby(hobbyData: CreateHobbyDto): Promise<Hobby> {
    if (isEmpty(hobbyData)) throw new HttpException(400, "You're not hobbyData");

    const createHobbyData: Hobby = await this.hobbies.create(hobbyData);

    return createHobbyData;
  }

  public async deleteHobby(hobbyId: string): Promise<Hobby> {
    const deleteHobbyById: Hobby = await this.hobbies.findByIdAndDelete(hobbyId);
    if (!deleteHobbyById) throw new HttpException(409, "You're not hobby");

    return deleteHobbyById;
  }
}

export default HobbyService;
