import { IsString, IsArray } from 'class-validator';

export class CreateUserDto {
  @IsString()
  public name: string;

  @IsArray()
  public hobbies: string[];
}
