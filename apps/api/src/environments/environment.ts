import { join } from "path";

export const environment = {
    production: false,
    projectDir: join(process.cwd(), "apps/api/src"),
};
