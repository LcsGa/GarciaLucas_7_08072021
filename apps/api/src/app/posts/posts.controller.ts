import { Body, Controller, Delete, Get, Param, Patch, Post, UseGuards } from "@nestjs/common";
import { CreateCommentDto, CreatePostDto, UpdateCommentDto, UpdatePostDto } from "libs/dto/src/lib/dto";
import { CommentsService } from "../comments/comments.service";
import { CanDeleteGuard } from "../shared/guards/can-delete.guard";
import { Post as PostEntity } from "./post.entity";
import { PostsService } from "./posts.service";

@Controller("posts")
export class PostsController {
    constructor(private postsService: PostsService, private commentsService: CommentsService) {}

    @Post()
    public async create(@Body() createPostDto: CreatePostDto): Promise<PostEntity> {
        return await this.postsService.create(createPostDto);
    }

    @Post("comment")
    public async createComment(@Body() createCommentDto: CreateCommentDto): Promise<PostEntity> {
        return await this.commentsService.createComment(createCommentDto);
    }

    @Get()
    public async findAll(): Promise<PostEntity[]> {
        return await this.postsService.findAll();
    }

    @Get(":userId")
    public async findByUserId(@Param("userId") userId: string) {
        return await this.postsService.findByUser(userId);
    }

    @Patch()
    public async update(@Body() updatedPost: UpdatePostDto) {
        return await this.postsService.update(updatedPost);
    }

    @Patch("like")
    public async updateLikes(@Body() updatedPost: UpdatePostDto): Promise<PostEntity> {
        return await this.postsService.updateLikes(updatedPost);
    }

    @Patch("comment")
    public async updateComment(@Body() updatedComment: UpdateCommentDto): Promise<PostEntity> {
        return await this.commentsService.updateComment(updatedComment);
    }

    @Delete(":id")
    @UseGuards(CanDeleteGuard)
    public async delete(@Param("id") id: string) {
        await this.postsService.delete(id);
    }

    @Delete("comments/:id")
    @UseGuards(CanDeleteGuard)
    public async deleteComment(@Param("id") commentId: string) {
        await this.commentsService.deleteComment(commentId);
    }
}
