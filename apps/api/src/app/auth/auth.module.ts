import { Module } from "@nestjs/common";
import { JwtModule } from "@nestjs/jwt";
import { PassportModule } from "@nestjs/passport";
import { UsersModule } from "./users/users.module";

import { AuthService } from "./auth.service";

import { AuthController } from "./auth.controller";

import { JwtStrategy } from "./jwt/jwt.strategy";

@Module({
    imports: [
        JwtModule.register({
            secret: process.env.JWT_TOKEN,
            signOptions: { expiresIn: 5 * 60 + 30 }, // 5min 30s
        }),
        PassportModule,
        UsersModule,
    ],
    providers: [AuthService, JwtStrategy],
    controllers: [AuthController],
})
export class AuthModule {}
