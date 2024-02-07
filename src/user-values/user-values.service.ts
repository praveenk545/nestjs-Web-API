import { Injectable } from '@nestjs/common';
import { CreateUserValueDto, GetUserDto } from './dto/create-user-value.dto';
import { UpdateUserValueDto } from './dto/update-user-value.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { UserValue } from './entities/user-value.entity';
import { EntityManager, Repository } from 'typeorm';

@Injectable()
export class UserValuesService {
  constructor(
    @InjectRepository(UserValue)
    private userRepository: Repository<UserValue>,
    readonly entityManager: EntityManager,
  ) {}
  async create(createUserValueDto: CreateUserValueDto) {
    try {
      let user = new UserValue();
      user.name = createUserValueDto.name;
      user.Date = createUserValueDto.date;
      // entity.number_of_leave = cateLeaveDto.number_of_leave;
      // entity.for = createLeaveDto.for;

      let saved = await this.userRepository.save(user);
      return {
        statusCode: 200,
        message: ['Data saved'],
        data: { id: saved.id },
      };
    } catch (error) {
      console.log('error', error);
      return {
        statusCode: 500,
        message: [error.message],
        stack: error.stack,
      };
    }
  }

  async findAll() {
    try {
      let data = await this.userRepository.query(
        'select id, user_id, name,"Date" from user_value',
      );
      return { statusCode: 200, data: data };
    } catch (error) {
      return { statusCode: 500, message: [error.message] };
    }
  }

  async findOne(id: string, getuserDto: GetUserDto) {
    //   try {
    //     let filter1 = getuserDto.id ? `"id" = '${getuserDto.id}'` : '';

    //     let data: any = await this.userRepository.query(
    //       `select * from user_value where ${filter1} `,
    //     );
    //     if (data.length > 0) {
    //       return {
    //         statusCode: 200,
    //         data: data[0],
    //       };
    //     } else {
    //       return {
    //         statusCode: 400,
    //         message: ['Invaild id'],
    //       };
    //     }
    //   } catch (error) {
    //     console.log('error', error);
    //     return {
    //       statusCode: 500,
    //       message: [error.message],
    //       stack: error.stack,
    //     };
    //   }
    //   // return this.uservalue.find((uservalue) => uservalue.id === userid);
    // }
    try {
      //console.log('req', req.user);
      // id = req.user.roles == 'User' ? req.user.userId : id;
      let data = await this.userRepository.findOne({
        where: { id: id },
      });
      if (data) {
        console.log('hi');
      }
      return { statusCode: 200, data: data };
    } catch (error) {
      return { statusCode: 500, message: [error.message] };
    }
  }

  async update(id: string, updateUserValueDto: UpdateUserValueDto, req: any) {
    try {
      //console.log('req', req.user);
      // id = req.user.roles == 'user_value' ? req.user_value.id : id;
      let user = await this.userRepository.query(`select name from user_value 
      where id = '${id}' and "isActive" = true`);
      if (user.length > 0) {
        let userEntity = new UserValue();
        if (updateUserValueDto.name) userEntity.name = updateUserValueDto.name;

        let saved = await this.userRepository.update({ id: id }, userEntity);
        return { statusCode: 200, message: ['User saved'], data: saved };
      } else {
        return { statusCode: 400, message: ['Invaild User'] };
      }
    } catch (error) {
      return { statusCode: 500, message: [error.message] };
    }
  }

  async remove(id: string) {
    try {
      let data = await this.userRepository.delete({
        id: id,
      });
      return { statusCode: 200, data: data };
    } catch (error) {
      return { statusCode: 500, message: [error.message] };
    }
  }
}
