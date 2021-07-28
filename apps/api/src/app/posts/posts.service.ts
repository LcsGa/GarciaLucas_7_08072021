import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { CreatePostDto } from "libs/dto/src/lib/dto";
import { DeleteResult, Repository } from "typeorm";
import { Post } from "./post.entity";

@Injectable()
export class PostsService {
    constructor(@InjectRepository(Post) private postsRepository: Repository<Post>) {}

    public async findAll(): Promise<Post[]> {
        return await this.postsRepository.find();
    }

    public async create(createPostDto: CreatePostDto): Promise<Post> {
        const createdPost = this.postsRepository.create(createPostDto);
        return await this.postsRepository.save(createdPost);
    }

    public async delete(id: string) {
        await this.postsRepository.delete(id);
    }
}
