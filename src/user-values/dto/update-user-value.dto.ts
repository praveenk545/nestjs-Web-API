import { PartialType } from '@nestjs/swagger';
import { CreateUserValueDto } from './create-user-value.dto';

export class UpdateUserValueDto extends PartialType(CreateUserValueDto) {}
