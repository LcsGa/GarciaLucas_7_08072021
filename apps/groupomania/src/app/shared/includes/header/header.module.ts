import { NgModule } from "@angular/core";
import { SharedModule } from "primeng/api";
import { MenubarModule } from "primeng/menubar";
import { MySharedModule } from "../../modules/my-shared.module";

import { HeaderComponent } from "./header.component";

@NgModule({
    declarations: [HeaderComponent],
    imports: [MySharedModule, SharedModule, MenubarModule],
    exports: [HeaderComponent],
})
export class HeaderModule {}
