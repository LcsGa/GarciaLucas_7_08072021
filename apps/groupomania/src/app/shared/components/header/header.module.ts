import { NgModule } from "@angular/core";
import { MenubarModule } from "primeng/menubar";
import { PrimeModule } from "../../modules/prime.module";
import { SharedModule } from "primeng/api";

import { HeaderComponent } from "./header.component";

@NgModule({
    declarations: [HeaderComponent],
    imports: [MenubarModule, PrimeModule, SharedModule],
    exports: [HeaderComponent],
})
export class HeaderModule {}
