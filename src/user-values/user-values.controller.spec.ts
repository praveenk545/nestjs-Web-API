import { Test, TestingModule } from '@nestjs/testing';
import { UserValuesController } from './user-values.controller';
import { UserValuesService } from './user-values.service';

describe('UserValuesController', () => {
  let controller: UserValuesController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [UserValuesController],
      providers: [UserValuesService],
    }).compile();

    controller = module.get<UserValuesController>(UserValuesController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
