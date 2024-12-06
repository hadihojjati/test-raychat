import { Test, TestingModule } from '@nestjs/testing';
import { RedisService } from './redis.service';
import { RedisService as NestRedisService } from '@liaoliaots/nestjs-redis';
import { Redis } from 'ioredis';

describe('RedisService', () => {
  let service: RedisService;
  let redisClient: Redis;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        RedisService,
        {
          provide: NestRedisService,
          useValue: {
            getClient: jest.fn().mockReturnValue({
              set: jest.fn(),
              get: jest.fn(),
              del: jest.fn(),
            }),
          },
        },
      ],
    }).compile();

    service = module.get<RedisService>(RedisService);
    redisClient = (service as any).redisClient; // Access the mocked Redis client
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  it('should set a value in Redis', async () => {
    await service.set('key', 'value', 10);
    expect(redisClient.set).toHaveBeenCalledWith('key', 'value', 'EX', 10);
  });

  it('should get a value from Redis', async () => {
    (redisClient.get as jest.Mock).mockResolvedValueOnce('value');
    const result = await service.get('key');
    expect(result).toBe('value');
    expect(redisClient.get).toHaveBeenCalledWith('key');
  });

  it('should delete a key from Redis', async () => {
    await service.del('key');
    expect(redisClient.del).toHaveBeenCalledWith('key');
  });
});
