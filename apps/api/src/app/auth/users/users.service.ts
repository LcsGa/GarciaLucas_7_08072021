import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { CreateUserDto } from "libs/dto/src/lib/dto";
import { Repository } from "typeorm";
import { User } from "./user.entity";
import * as bcrypt from "bcrypt";
import * as fs from "fs";
import { environment } from "apps/api/src/environments/environment";
import { join } from "path";

@Injectable()
export class UsersService {
    constructor(@InjectRepository(User) private usersRepository: Repository<User>) {}

    public async create(createUserDto: CreateUserDto): Promise<User> {
        const createdUser = {
            ...createUserDto,
            password: await bcrypt.hash(createUserDto.password, 10),
        };
        return await this.usersRepository.save(createdUser);
    }

    public async findByEmail(email: string): Promise<User> {
        return await this.usersRepository
            .createQueryBuilder("user")
            .where("user.email = :email", { email: email })
            .addSelect("user.password")
            .getOne();
    }

    public async findById(id: string): Promise<User> {
        return await this.usersRepository.findOne(id);
    }

    public getAvatarURL(userId: string): string {
        const avatarPath = `/users/${userId}.jpg`;
        const hasAvatar = fs.existsSync(join(environment.projectDir, "assets", avatarPath));

        if (hasAvatar) {
            return "/api" + avatarPath;
        }
    }
}
