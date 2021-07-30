import {
    Body,
    ClassSerializerInterceptor,
    Controller,
    Delete,
    Get,
    Param,
    Patch,
    Post,
    UseInterceptors,
} from "@nestjs/common";
import { CreatePostDto, UpdatePostDto } from "libs/dto/src/lib/dto";
import { Post as PostEntity } from "./post.entity";
import { PostsService } from "./posts.service";

@Controller("posts")
export class PostsController {
    constructor(private postsService: PostsService) {}

    @Post()
    public async create(@Body() createPostDto: CreatePostDto): Promise<PostEntity> {
        return await this.postsService.create(createPostDto);
    }

    @Get()
    public async findAll(): Promise<PostEntity[]> {
        const posts = await this.postsService.findAll();
        return posts;
    }

    @Patch("like")
    public async updateLikes(@Body() updatePost: UpdatePostDto): Promise<PostEntity> {
        return await this.postsService.updateLikes(updatePost);
    }

    @Delete(":id")
    public async delete(@Param("id") id: string) {
        await this.postsService.delete(id);
    }
}
