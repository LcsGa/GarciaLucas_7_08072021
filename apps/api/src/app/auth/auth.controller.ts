import { Body, Controller, Post } from "@nestjs/common";
import { CreateUserDto, SigninUserDto } from "libs/dto/src/lib/dto";
import { AuthService } from "./auth.service";

@Controller("auth")
export class AuthController {
    constructor(private authService: AuthService) {}

    @Post("signup")
    public async signup(@Body() user: CreateUserDto) {
        return await this.authService.signup(user);
    }

    @Post("signin")
    public async signin(@Body() signinUser: SigninUserDto) {
        return await this.authService.signin(signinUser);
    }
}
