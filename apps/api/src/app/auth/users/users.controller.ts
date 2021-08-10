import { Controller, Post, Req, UploadedFile, UseInterceptors } from "@nestjs/common";
import { FileInterceptor } from "@nestjs/platform-express";
import "multer";

@Controller("users")
export class UsersController {
    @Post("avatar")
    @UseInterceptors(FileInterceptor("avatar"))
    uploadAvatar(@UploadedFile() avatar: Express.Multer.File) {}
}
