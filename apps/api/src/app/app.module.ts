import { Module } from "@nestjs/common";
import { AuthModule } from "./auth/auth.module";
import { ConfigModule } from "@nestjs/config";
import { PostsModule } from "./posts/posts.module";
import { TypeOrmModule } from "@nestjs/typeorm";

import { AppController } from "./app.controller";

// utils
import { join } from "path";
import { environment } from "../environments/environment";

// Entities
import { User } from "./auth/users/user.entity";
import { Post } from "./posts/post.entity";
import { Comment } from "./comments/comment.entity";

// Guards
import { APP_GUARD } from "@nestjs/core";
import { JwtAuthGuard } from "./auth/jwt/jwt-auth.guard";

@Module({
    imports: [
        AuthModule,
        ConfigModule.forRoot({
            envFilePath: join(environment.projectDir, "environments/.env"),
            isGlobal: true,
        }),
        PostsModule,
        TypeOrmModule.forRoot({
            type: "postgres",
            host: "localhost",
            port: 5432,
            username: "postgres",
            password: "postgres",
            database: "Groupomania",
            entities: [User, Post, Comment],
            synchronize: true,
        }),
    ],
    controllers: [AppController],
    providers: [{ provide: APP_GUARD, useClass: JwtAuthGuard }],
})
export class AppModule {}
