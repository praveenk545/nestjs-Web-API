import { Test, TestingModule } from '@nestjs/testing';
import { UserValuesService } from './user-values.service';

describe('UserValuesService', () => {
  let service: UserValuesService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [UserValuesService],
    }).compile();

    service = module.get<UserValuesService>(UserValuesService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
