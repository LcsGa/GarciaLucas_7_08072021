import { Body, Controller, Get, Post, Req } from "@nestjs/common";
import { CreateUserDto, SigninUserDto } from "libs/dto/src/lib/dto";
import { Request } from "express";
import { AuthService } from "./auth.service";
import { Public } from "./decorators/public.decorator";

@Controller("auth")
export class AuthController {
    constructor(private authService: AuthService) {}

    @Public()
    @Post("signup")
    public async signup(@Body() user: CreateUserDto) {
        return await this.authService.signup(user);
    }

    @Public()
    @Post("signin")
    public async signin(@Body() signinUser: SigninUserDto) {
        return await this.authService.signin(signinUser);
    }

    @Public()
    @Get("refresh-access-token")
    public refreshAccessToken(@Req() req: Request) {
        return this.authService.refreshAccessToken(req);
    }
}
