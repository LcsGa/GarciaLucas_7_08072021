import { Controller, Get, Param, Post, Req, Res, UploadedFile, UseInterceptors } from "@nestjs/common";
import { FileInterceptor } from "@nestjs/platform-express";
import { UsersService } from "./users.service";
import "multer";

@Controller("users")
export class UsersController {
    constructor(private usersService: UsersService) {}

    @Post("avatar")
    @UseInterceptors(FileInterceptor("avatar"))
    uploadAvatar(@UploadedFile() avatar: Express.Multer.File) {}

    @Get(":userId/avatar")
    getAvatarURL(@Param("userId") userId: string) {
        return { URL: this.usersService.getAvatarURL(userId) };
    }
}
