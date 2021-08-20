import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { MenubarModule } from "primeng/menubar";
import { PrimeModule } from "../../modules/prime.module";
import { SharedModule } from "primeng/api";

import { HeaderComponent } from "./header.component";

@NgModule({
    declarations: [HeaderComponent],
    imports: [CommonModule, MenubarModule, PrimeModule, SharedModule],
    exports: [HeaderComponent],
})
export class HeaderModule {}
