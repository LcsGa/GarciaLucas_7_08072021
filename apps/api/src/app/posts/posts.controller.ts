import { Body, Controller, Delete, Get, Param, Patch, Post } from "@nestjs/common";
import { CreateCommentDto, CreatePostDto, UpdateCommentDto, UpdatePostDto } from "libs/dto/src/lib/dto";
import { Post as PostEntity } from "./post.entity";
import { PostsService } from "./posts.service";

@Controller("posts")
export class PostsController {
    constructor(private postsService: PostsService) {}

    @Post()
    public async create(@Body() createPostDto: CreatePostDto): Promise<PostEntity> {
        return await this.postsService.create(createPostDto);
    }

    @Post("comment")
    public async createComment(@Body() createCommentDto: CreateCommentDto): Promise<PostEntity> {
        return await this.postsService.createComment(createCommentDto);
    }

    @Get()
    public async findAll(): Promise<PostEntity[]> {
        const posts = await this.postsService.findAll();
        return posts;
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
        return await this.postsService.updateComment(updatedComment);
    }

    @Delete(":id")
    public async delete(@Param("id") id: string) {
        await this.postsService.delete(id);
    }

    @Delete("comments/:id")
    public async deleteComment(@Param("id") commentId: string) {
        await this.postsService.deleteComment(commentId);
    }
}
