import { HttpModule } from '@nestjs/axios';
import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { AuthController } from './auth/auth.controller';
import { AuthService } from './auth/auth.service';
import { JwtStrategyService } from './jwt-strategy/jwt-strategy.service';

@Module({
  imports: [
    HttpModule,
    JwtModule.register({
      secret: 'abcd123456',
      signOptions: {
        expiresIn: '30m'
      },
    }),
  ],
  controllers: [AuthController],
  providers: [AuthService, JwtStrategyService]
})
export class AuthModule { }
