import { Test, TestingModule } from '@nestjs/testing';
import { RedirectsController } from './redirects.controller';

describe('RedirectsController', () => {
  let controller: RedirectsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [RedirectsController],
    }).compile();

    controller = module.get<RedirectsController>(RedirectsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
