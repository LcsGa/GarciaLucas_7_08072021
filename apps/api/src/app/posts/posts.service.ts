import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { CreatePostDto, UpdatePostDto } from "libs/dto/src/lib/dto";
import { Repository } from "typeorm";
import { Post } from "./post.entity";

@Injectable()
export class PostsService {
    constructor(@InjectRepository(Post) private postsRepository: Repository<Post>) {}

    public async create(createPostDto: CreatePostDto): Promise<Post> {
        const createdPost = this.postsRepository.create(createPostDto);
        return await this.postsRepository.save(createdPost);
    }

    public async findAll(): Promise<Post[]> {
        return await this.postsRepository.find({ order: { created_at: "ASC" } });
    }

    public async findByUser(userId: string): Promise<Post[]> {
        return await this.postsRepository.find({ where: { author: { id: userId } } });
    }

    public async update(updatedPost: UpdatePostDto): Promise<Post> {
        return await this.postsRepository.save(updatedPost);
    }

    public async updateLikes(updatedPost: UpdatePostDto): Promise<Post> {
        return await this.postsRepository.save(updatedPost);
    }

    public async delete(id: string) {
        await this.postsRepository.delete(id);
    }

    public async isUserOwner(userId: string, postId: string): Promise<boolean> {
        const post = await this.postsRepository
            .createQueryBuilder("post")
            .where("post.id = :id and post.authorId = :userId", { id: postId, userId })
            .getOne();

        if (post) return true;
        return false;
    }
}
