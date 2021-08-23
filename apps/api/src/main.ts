/**
 * This is not a production server yet!
 * This is only a minimal backend to get started.
 */

import { Logger } from "@nestjs/common";
import { NestFactory } from "@nestjs/core";
import { NestExpressApplication } from "@nestjs/platform-express";
import { join } from "path";
import * as helmet from "helmet";

import { AppModule } from "./app/app.module";
import { environment } from "./environments/environment";

async function bootstrap() {
    const app = await NestFactory.create<NestExpressApplication>(AppModule);

    app.use(helmet());

    const globalPrefix = "/api";
    app.setGlobalPrefix(globalPrefix);

    app.useStaticAssets(join(environment.projectDir, "assets"), { prefix: globalPrefix });

    const port = process.env.PORT || 3333;
    await app.listen(port, () => {
        Logger.log("Listening at http://localhost:" + port + globalPrefix);
    });
}

bootstrap();
