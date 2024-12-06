import { Test, TestingModule } from '@nestjs/testing';
import { HipsController } from './hips.controller';
import { HipsService } from './hips.service';

describe('HipsController', () => {
  let controller: HipsController;
  let service: HipsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [HipsController],
      providers: [
        {
          provide: HipsService,
          useValue: {
            getHips: jest.fn().mockResolvedValue(['hip1', 'hip2']),
          },
        },
      ],
    }).compile();

    controller = module.get<HipsController>(HipsController);
    service = module.get<HipsService>(HipsService);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });

  it('should return an array of Hips', async () => {
    const result = await controller.getHips();
    expect(result).toEqual(['hip1', 'hip2']);
    expect(service.getHips).toHaveBeenCalled();
  });
});
