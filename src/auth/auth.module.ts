import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { PassportModule } from '@nestjs/passport';
import { ConfigModule, ConfigService } from '@nestjs/config'; 
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { UsersModule } from '../users/users.module';
import { JwtStrategy } from './jwt.strategy';
import { RedisCustomModule } from '../common/redis/redis.module';

@Module({
  imports: [
    ConfigModule, 
    UsersModule,
    PassportModule,
    RedisCustomModule,
    JwtModule.registerAsync({
      imports: [ConfigModule], // Use ConfigModule to load env variables
      inject: [ConfigService],
      useFactory: async (configService: ConfigService) => ({
        secret: configService.get<string>('JWT_SECRET'), // Retrieve JWT_SECRET from .env
        signOptions: { expiresIn: configService.get<string>('JWT_EXPIRES_IN') || '60m' }, // Optional expiration time config
      }),
    }),
  ],
  providers: [AuthService, JwtStrategy],
  controllers: [AuthController],
  exports: [AuthService],
})
export class AuthModule {}
