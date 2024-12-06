import { Module } from '@nestjs/common';
import { RedisModule } from '@liaoliaots/nestjs-redis';
import { RedisService } from './redis.service';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [
    ConfigModule.forRoot({
        isGlobal: true, // Makes configuration globally available
      }),
    RedisModule.forRoot({
      config: {
        url: `redis://${process.env.REDIS_USER}:${process.env.REDIS_PASSWORD}@${process.env.REDIS_HOST}:${process.env.REDIS_PORT}`,

      },
    }),
  ],
  providers: [RedisService],
  exports: [RedisService], 
})
export class RedisCustomModule {}
