import { Body, Controller, Post } from "@nestjs/common";
import { UserDto } from "libs/dto/src/lib/dto";
import { AuthService } from "./auth.service";
import { User } from "./user.entity";

@Controller("auth")
export class AuthController {
    constructor(private authService: AuthService) {}

    @Post("signup")
    public async signup(@Body() user: UserDto): Promise<User> {
        return await this.authService.createUser(user);
    }
}
