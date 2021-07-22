import { NgModule } from "@angular/core";
import { AvatarModule } from "primeng/avatar";
import { ButtonModule } from "primeng/button";
import { CardModule } from "primeng/card";
import { DividerModule } from "primeng/divider";
import { FileUploadModule } from "primeng/fileupload";
import { InputTextModule } from "primeng/inputtext";
import { InputTextareaModule } from "primeng/inputtextarea";
import { MessageModule } from "primeng/message";
import { RippleModule } from "primeng/ripple";
import { TieredMenuModule } from "primeng/tieredmenu";

@NgModule({
    declarations: [],
    exports: [
        AvatarModule,
        ButtonModule,
        CardModule,
        DividerModule,
        FileUploadModule,
        InputTextModule,
        InputTextareaModule,
        MessageModule,
        RippleModule,
        TieredMenuModule,
    ],
})
export class PrimeModule {}
