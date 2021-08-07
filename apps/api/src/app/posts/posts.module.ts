import { Module } from "@nestjs/common";
import { PostsService } from "./posts.service";
import { PostsController } from "./posts.controller";
import { TypeOrmModule } from "@nestjs/typeorm";
import { Post } from "./post.entity";
import { Comment } from "../comments/comment.entity";

@Module({
    imports: [TypeOrmModule.forFeature([Post, Comment])],
    providers: [PostsService],
    controllers: [PostsController],
})
export class PostsModule {}
