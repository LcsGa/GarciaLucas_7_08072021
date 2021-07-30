import { Module } from "@nestjs/common";
import { AuthModule } from "./auth/auth.module";
import { CommentsModule } from "./comments/comments.module";
import { ConfigModule } from "@nestjs/config";
import { PostsModule } from "./posts/posts.module";
import { TypeOrmModule } from "@nestjs/typeorm";

import { AppController } from "./app.controller";

import { join } from "path";

// Entities
import { User } from "./auth/users/user.entity";
import { Post } from "./posts/post.entity";

// Guards
import { APP_GUARD } from "@nestjs/core";
import { JwtAuthGuard } from "./auth/jwt/jwt-auth.guard";

@Module({
    imports: [
        AuthModule,
        ConfigModule.forRoot({
            envFilePath: join(process.cwd(), "apps/api/src/environments/.env"),
            isGlobal: true,
        }),
        TypeOrmModule.forRoot({
            type: "postgres",
            host: "localhost",
            port: 5432,
            username: "postgres",
            password: "postgres",
            database: "Groupomania",
            entities: [User, Post],
            synchronize: true,
        }),
        PostsModule,
        CommentsModule,
    ],
    controllers: [AppController],
    providers: [{ provide: APP_GUARD, useClass: JwtAuthGuard }],
})
export class AppModule {}
