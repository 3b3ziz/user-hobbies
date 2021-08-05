import { CreateUserDto } from '@dtos/users.dto';
import { HttpException } from '@exceptions/HttpException';
import { User } from '@interfaces/users.interface';
import userModel from '@models/users.model';
import { isEmpty } from '@utils/util';

class UserService {
  public users = userModel;

  public async findAllUser(): Promise<User[]> {
    const users: User[] = await this.users.find();
    return users;
  }

  public async findUserById(userId: string): Promise<User> {
    if (isEmpty(userId)) throw new HttpException(400, "You're not userId");

    const findUser: User = await this.users.findOne({ _id: userId }).populate('hobbies');
    if (!findUser) throw new HttpException(409, "You're not user");

    return findUser;
  }

  public async createUser(userData: CreateUserDto): Promise<User> {
    if (isEmpty(userData)) throw new HttpException(400, "You're not userData");

    const createUserData: User = await this.users.create(userData);

    return createUserData;
  }

  public async assignHobby(userId: string, hobbyId: string): Promise<User> {
    const user: User = await this.users.findByIdAndUpdate(userId, { $push: { hobbies: hobbyId } });
    if (!user) throw new HttpException(409, "You're not user");

    return user;
  }

  public async unassignHobby(userId: string, hobbyId: string): Promise<User> {
    const user: User = await this.users.findByIdAndUpdate(userId, { $pull: { hobbies: hobbyId } });
    if (!user) throw new HttpException(409, "You're not user");

    return user;
  }

  public async deleteUser(userId: string): Promise<User> {
    const deleteUserById: User = await this.users.findByIdAndDelete(userId);
    if (!deleteUserById) throw new HttpException(409, "You're not user");

    return deleteUserById;
  }
}

export default UserService;
