import { Module } from "@nestjs/common";
import { JwtModule } from "@nestjs/jwt";
import { PassportModule } from "@nestjs/passport";
import { UsersModule } from "./users/users.module";

import { AuthService } from "./auth.service";
import { JwtStrategy } from "./jwt/jwt.strategy";

import { AuthController } from "./auth.controller";

@Module({
    imports: [
        JwtModule.register({
            secret: process.env.JWT_TOKEN,
            signOptions: { expiresIn: "60s" },
        }),
        PassportModule,
        UsersModule,
    ],
    providers: [AuthService, JwtStrategy],
    controllers: [AuthController],
})
export class AuthModule {}
