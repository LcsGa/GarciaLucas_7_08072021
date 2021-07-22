import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { CreateUserDto } from "libs/dto/src/lib/dto";
import { Repository } from "typeorm";
import { User } from "./user.entity";
import * as bcrypt from "bcrypt";

@Injectable()
export class UserService {
    constructor(@InjectRepository(User) private userRepository: Repository<User>) {}

    public async create(user: CreateUserDto): Promise<User> {
        const createdUser = {
            ...user,
            password: await bcrypt.hash(user.password, 10),
        };
        return await this.userRepository.save(createdUser);
    }

    public async findByEmail(email: string) {
        return (await this.userRepository.find({ email }))[0];
    }
}
