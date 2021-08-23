import { Body, Controller, Delete, Get, Param, Patch, Post, UploadedFile, UseInterceptors } from "@nestjs/common";
import { FileInterceptor } from "@nestjs/platform-express";
import { UsersService } from "./users.service";
import "multer";
import { UpdateUserDto } from "libs/dto/src/lib/dto";

@Controller("users")
export class UsersController {
    constructor(private usersService: UsersService) {}

    @Post("avatar")
    @UseInterceptors(FileInterceptor("avatar"))
    public uploadAvatar(@UploadedFile() avatar: Express.Multer.File) {}

    @Get()
    public async findAll() {
        return await this.usersService.findAll();
    }

    @Get(":id")
    public async findById(@Param("id") id: string) {
        return await this.usersService.findById(id);
    }

    @Get(":userId/avatar")
    public getAvatarURL(@Param("userId") userId: string) {
        return { URL: this.usersService.getAvatarURL(userId) };
    }

    @Patch()
    public async updateUser(@Body() updateUser: UpdateUserDto) {
        return await this.usersService.updateUser(updateUser);
    }

    @Delete(":id")
    public async deleteUSer(@Param("id") id: string) {
        await this.usersService.deleteUser(id);
    }
}
