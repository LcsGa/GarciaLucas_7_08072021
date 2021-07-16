import { Module } from "@nestjs/common";
import { AuthModule } from "./auth/auth.module";
import { TypeOrmModule } from "@nestjs/typeorm";

import { AppController } from "./app.controller";

import { AppService } from "./app.service";
import { User } from "./auth/user.entity";

@Module({
    imports: [
        AuthModule,
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
