import { Body, Controller, Get, Post, UseGuards } from "@nestjs/common";
import { CreatePostDto } from "libs/dto/src/lib/dto";
import { JwtAuthGuard } from "../auth/jwt/jwt-auth.guard";
import { PostsService } from "./posts.service";

@Controller("posts")
export class PostsController {
    constructor(private postsService: PostsService) {}

    @UseGuards(JwtAuthGuard)
    @Get()
    public async findAll() {
        return await this.postsService.findAll();
    }

    @Post()
    public async create(@Body() createPostDto: CreatePostDto) {
        return await this.postsService.create(createPostDto);
    }
}
