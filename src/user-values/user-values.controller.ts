import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { UserValuesService } from './user-values.service';
import { CreateUserValueDto, GetUserDto } from './dto/create-user-value.dto';
import { UpdateUserValueDto } from './dto/update-user-value.dto';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('User-values')
@Controller('user-values')
export class UserValuesController {
  constructor(private readonly userValuesService: UserValuesService) {}

  @Post('post')
  create(@Body() createUserValueDto: CreateUserValueDto) {
    return this.userValuesService.create(createUserValueDto);
  }

  @Get('all')
  findAll() {
    return this.userValuesService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string, getuserDto: GetUserDto) {
    return this.userValuesService.findOne(id, getuserDto);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateUserValueDto: UpdateUserValueDto,
    req: any,
  ) {
    return this.userValuesService.update(id, updateUserValueDto, req);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.userValuesService.remove(id);
  }
}
