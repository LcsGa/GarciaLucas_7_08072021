import { Module } from "@nestjs/common";
import { MulterModule } from "@nestjs/platform-express";
import { TypeOrmModule } from "@nestjs/typeorm";

import { UsersService } from "./users.service";

import { User } from "./user.entity";
import { UsersController } from "./users.controller";

import * as multer from "multer";
import { join } from "path";
import { environment } from "apps/api/src/environments/environment";

@Module({
    imports: [
        MulterModule.register({
            storage: multer.diskStorage({
                destination: (_req, _file, cb) => cb(null, join(environment.projectDir, "..", "public/images/users")),
                filename: (req, _file, cb) => cb(null, `${(req.user as { userId: string }).userId}.jpg`),
            }),
        }),
        TypeOrmModule.forFeature([User]),
    ],
    exports: [UsersService],
    providers: [UsersService],
    controllers: [UsersController],
})
export class UsersModule {}
