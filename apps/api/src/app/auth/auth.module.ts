import { Module } from "@nestjs/common";
import { JwtModule } from "@nestjs/jwt";
import { PassportModule } from "@nestjs/passport";
import { UserModule } from "./user/user.module";

import { AuthService } from "./auth.service";

import { AuthController } from "./auth.controller";

@Module({
    imports: [
        JwtModule.register({
            secret: process.env.JWT_TOKEN,
            signOptions: { expiresIn: "60s" },
        }),
        PassportModule,
        UserModule,
    ],
    providers: [AuthService],
    controllers: [AuthController],
})
export class AuthModule {}
