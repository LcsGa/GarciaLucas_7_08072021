import { Injectable, NotFoundException, UnauthorizedException } from "@nestjs/common";

import { ConfigService } from "@nestjs/config";
import { JwtService } from "@nestjs/jwt";
import { UsersService } from "./users/users.service";

import * as bcrypt from "bcrypt";

import { CreateUserDto, SafeUser, SigninUserDto, User } from "libs/dto/src/lib/dto";

@Injectable()
export class AuthService {
    constructor(
        private usersService: UsersService,
        private jwtService: JwtService,
        private configService: ConfigService
    ) {}

    public async validateUser(email: string, pass: string): Promise<SafeUser> {
        const user = await this.usersService.findByEmail(email);

        if (user) {
            const isPasswordValid = await bcrypt.compare(pass, user.password);

            if (isPasswordValid) {
                const { password, ...result } = user;
                return result;
            }
            return null;
        }
        throw new NotFoundException();
    }

    public async signin(signinUser: SigninUserDto): Promise<{ access_token: string }> {
        const user = await this.validateUser(signinUser.email, signinUser.password);

        if (user) {
            return {
                access_token: this.jwtService.sign(
                    { userId: user.id },
                    { secret: this.configService.get<string>("JWT_SECRET") }
                ),
            };
        }
        throw new UnauthorizedException();
    }

    public async signup(user: CreateUserDto): Promise<User> {
        return await this.usersService.create(user);
    }
}
