import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { CreateCommentDto, CreatePostDto, UpdateCommentDto, UpdatePostDto } from "libs/dto/src/lib/dto";
import { Repository } from "typeorm";
import { Comment } from "../comments/comment.entity";
import { Post } from "./post.entity";

@Injectable()
export class PostsService {
    constructor(
        @InjectRepository(Post) private postsRepository: Repository<Post>,
        @InjectRepository(Comment) private commentsRepository: Repository<Comment>
    ) {}

    public async create(createPostDto: CreatePostDto): Promise<Post> {
        const createdPost = this.postsRepository.create(createPostDto);
        return await this.postsRepository.save(createdPost);
    }

    public async createComment(createCommentDto: CreateCommentDto): Promise<Post> {
        const createdComment = this.commentsRepository.create(createCommentDto);
        await this.commentsRepository.save(createdComment);
        return await this.postsRepository.findOne(createCommentDto.post.id);
    }

    public async findAll(): Promise<Post[]> {
        return await this.postsRepository.find({ order: { created_at: "ASC" } });
    }

    public async update(updatedPost: UpdatePostDto): Promise<Post> {
        return await this.postsRepository.save(updatedPost);
    }

    public async updateLikes(updatedPost: UpdatePostDto): Promise<Post> {
        return await this.postsRepository.save(updatedPost);
    }

    public async updateComment(updatedComment: UpdateCommentDto): Promise<Post> {
        await this.commentsRepository.save(updatedComment);
        return await this.postsRepository.findOne(updatedComment.postId);
    }

    public async delete(id: string) {
        await this.postsRepository.delete(id);
    }

    public async deleteComment(commentId: string) {
        await this.commentsRepository.delete(commentId);
    }
}
