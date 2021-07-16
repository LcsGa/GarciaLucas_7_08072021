import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { UserDto } from "../../../../../libs/dto/src/lib/dto";
import { User } from "./user.entity";

@Injectable()
export class AuthService {
    constructor(@InjectRepository(User) private userRepository: Repository<User>) {}

    public async createUser(user: UserDto): Promise<any> {
        return await this.userRepository.save(user);
    }
}
