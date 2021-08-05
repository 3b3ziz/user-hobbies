import { IsString, IsEnum, IsDateString } from 'class-validator';
import { PASSION_LEVELS } from '@/utils/constansts';

export class CreateHobbyDto {
  @IsString()
  public name: string;

  @IsEnum(PASSION_LEVELS)
  public passionLevel: string;

  @IsDateString()
  public year: Date;
}
