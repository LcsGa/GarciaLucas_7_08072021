import { Module } from "@nestjs/common";
import { AuthModule } from "./auth/auth.module";
import { ConfigModule } from "@nestjs/config";
import { PostsModule } from "./posts/posts.module";
import { TypeOrmModule } from "@nestjs/typeorm";

// Controllers
import { AppController } from "./app.controller";

// Utils
import { join } from "path";
import { environment } from "../environments/environment";

// Entities
import { Comment } from "./comments/comment.entity";
import { Post } from "./posts/post.entity";
import { User } from "./auth/users/user.entity";

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
