import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { ConfigModule } from '@nestjs/config';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';
import { UsersModule } from './users/users.module';
import { GroupsModule } from './groups/groups.module';
import { HipsModule } from './hips/hips.module';
import { AuthModule } from './auth/auth.module';
import { APP_GUARD } from '@nestjs/core';
import { JwtAuthGuard } from './auth/jwt-auth.guard';  
import { PermissionsGuard } from './common/guards/permissions.guard';
import { RedisModule } from '@liaoliaots/nestjs-redis'; 
import { RedisService } from './common/redis/redis.service'; 


@Module({
	imports: [
	ConfigModule.forRoot({ isGlobal: true }), 
	MongooseModule.forRoot(process.env.Mongo_URL), // MongoDB connection
    UsersModule, 
	GroupsModule,
	HipsModule,
	AuthModule,
    RedisModule.forRoot({
		config: {
			url: `redis://${process.env.REDIS_USER}:${process.env.REDIS_PASSWORD}@${process.env.REDIS_HOST}:${process.env.REDIS_PORT}`,

		  },

	  }), // RedisModule configuration
	],
  controllers: [AppController],
  providers: [AppService, RedisService,
	{
      provide: APP_GUARD,
      useClass: JwtAuthGuard,  // Apply JwtAuthGuard globally
    },  
	{
	 provide: APP_GUARD,
     useClass: PermissionsGuard, // Apply PermissionsGuard globally
	}
],
})
export class AppModule {}


