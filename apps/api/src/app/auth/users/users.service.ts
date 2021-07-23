import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { CreateUserDto } from "libs/dto/src/lib/dto";
import { Repository } from "typeorm";
import { User } from "./user.entity";
import * as bcrypt from "bcrypt";

@Injectable()
export class UsersService {
    constructor(@InjectRepository(User) private usersRepository: Repository<User>) {}

    public async create(user: CreateUserDto): Promise<User> {
        const createdUser = {
            ...user,
            password: await bcrypt.hash(user.password, 10),
        };
        return await this.usersRepository.save(createdUser);
    }

    public async findByEmail(email: string) {
        return (await this.usersRepository.find({ email }))[0];
    }
}
