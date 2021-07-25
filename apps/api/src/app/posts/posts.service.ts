import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { CreatePostDto } from "libs/dto/src/lib/dto";
import { Repository } from "typeorm";
import { Post } from "./post.entity";

@Injectable()
export class PostsService {
    constructor(@InjectRepository(Post) private postsRepository: Repository<Post>) {}

    public async findAll(): Promise<Post[]> {
        return await this.postsRepository.find();
    }

    public async create(createPostDto: CreatePostDto): Promise<Post> {
        return await this.postsRepository.save(createPostDto);
    }
}
