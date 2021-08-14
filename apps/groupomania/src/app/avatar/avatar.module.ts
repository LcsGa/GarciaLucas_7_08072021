import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { PrimeModule } from "../shared/modules/prime.module";

import { AvatarComponent } from "./avatar.component";

@NgModule({
    declarations: [AvatarComponent],
    imports: [CommonModule, PrimeModule],
    exports: [AvatarComponent],
})
export class AvatarModule {}
