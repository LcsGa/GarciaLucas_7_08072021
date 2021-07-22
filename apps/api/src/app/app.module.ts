import { Module } from "@nestjs/common";
import { AuthModule } from "./auth/auth.module";
import { ConfigModule } from "@nestjs/config";
import { TypeOrmModule } from "@nestjs/typeorm";

import { AppController } from "./app.controller";

import { AppService } from "./app.service";

import { join } from "path";

// Entities
import { User } from "./auth/user/user.entity";

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
            entities: [User],
            synchronize: true,
        }),
    ],
    controllers: [AppController],
    providers: [AppService],
})
export class AppModule {}
