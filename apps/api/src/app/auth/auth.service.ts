import {
    Injectable,
    NotFoundException,
    UnauthorizedException,
} from "@nestjs/common";

import { Request } from "express";

import { ConfigService } from "@nestjs/config";
import { JwtService } from "@nestjs/jwt";
import { UsersService } from "./users/users.service";

import * as bcrypt from "bcrypt";

import {
    CreateUserDto,
    SafeUser,
    SigninUserDto,
    User,
} from "libs/dto/src/lib/dto";

@Injectable()
export class AuthService {
    constructor(
        private usersService: UsersService,
        private jwtService: JwtService,
        private configService: ConfigService
    ) {}

    public async validateUser(signinUserDto: SigninUserDto): Promise<SafeUser> {
        const user = await this.usersService.findByEmail(signinUserDto.email);

        if (user) {
            const isPasswordValid = await bcrypt.compare(
                signinUserDto.password,
                user.password
            );

            if (isPasswordValid) {
                const { password, ...result } = user;
                return result;
            }
            return null;
        }
        throw new NotFoundException();
    }

    public createToken(userId: string): string {
        return this.jwtService.sign(
            { userId },
            { secret: this.configService.get<string>("JWT_SECRET") }
        );
    }

    public async signin(
        signinUser: SigninUserDto
    ): Promise<{ user: SafeUser; access_token: string }> {
        const user = await this.validateUser(signinUser);

        if (user) {
            return {
                user,
                access_token: this.createToken(user.id),
            };
        }
        throw new UnauthorizedException();
    }

    public async signup(user: CreateUserDto): Promise<User> {
        return await this.usersService.create(user);
    }

    public async refreshAccessToken(
        req: Request
    ): Promise<{ user: User; access_token: string } | void> {
        const token = req.headers.authorization.slice("Bearer ".length);

        if (token) {
            const jwtVerified = this.jwtService.verify<{ userId: string }>(
                token,
                {
                    secret: this.configService.get<string>("JWT_SECRET"),
                }
            );

            const currentUser = await this.usersService.findById(
                jwtVerified.userId
            );

            return {
                user: currentUser,
                access_token: this.createToken(jwtVerified.userId),
            };
        }
    }
}
