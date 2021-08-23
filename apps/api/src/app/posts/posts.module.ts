import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";

// Controllers
import { PostsController } from "./posts.controller";

// Entities
import { Comment } from "../comments/comment.entity";
import { Post } from "./post.entity";
import { User } from "../auth/users/user.entity";

// Services
import { CommentsService } from "../comments/comments.service";
import { PostsService } from "./posts.service";
import { UsersService } from "../auth/users/users.service";

@Module({
    imports: [TypeOrmModule.forFeature([Post, Comment, User])],
    providers: [CommentsService, PostsService, UsersService],
    controllers: [PostsController],
})
export class PostsModule {}
