import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { CreateCommentDto, UpdateCommentDto } from "libs/dto/src/lib/dto";
import { Repository } from "typeorm";
import { Post } from "../posts/post.entity";
import { Comment } from "./comment.entity";

@Injectable()
export class CommentsService {
    constructor(
        @InjectRepository(Comment) private commentsRepository: Repository<Comment>,
        @InjectRepository(Post) private postsRepository: Repository<Post>
    ) {}

    public async createComment(createCommentDto: CreateCommentDto): Promise<Post> {
        const createdComment = this.commentsRepository.create(createCommentDto);
        await this.commentsRepository.save(createdComment);
        return await this.postsRepository.findOne(createCommentDto.post.id);
    }

    public async updateComment(updatedComment: UpdateCommentDto): Promise<Post> {
        await this.commentsRepository.save(updatedComment);
        return await this.postsRepository.findOne(updatedComment.postId);
    }

    public async deleteComment(commentId: string) {
        await this.commentsRepository.delete(commentId);
    }

    public async isUserOwner(userId: string, commentId: string): Promise<boolean> {
        const comment = await this.commentsRepository
            .createQueryBuilder("comment")
            .where("comment.id = :commentId and comment.authorId = :userId", { commentId, userId })
            .getOne();

        if (comment) return true;
        return false;
    }
}
