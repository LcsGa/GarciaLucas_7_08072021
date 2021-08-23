import { NgModule } from "@angular/core";
import { AvatarModule } from "primeng/avatar";
import { ButtonModule } from "primeng/button";
import { CardModule } from "primeng/card";
import { ConfirmDialogModule } from "primeng/confirmdialog";
import { DividerModule } from "primeng/divider";
import { FileUploadModule } from "primeng/fileupload";
import { InputTextModule } from "primeng/inputtext";
import { InputTextareaModule } from "primeng/inputtextarea";
import { RippleModule } from "primeng/ripple";
import { ScrollTopModule } from "primeng/scrolltop";
import { TieredMenuModule } from "primeng/tieredmenu";
import { ToastModule } from "primeng/toast";

import { ConfirmationService } from "primeng/api";
import { MessageService } from "primeng/api";

@NgModule({
    declarations: [],
    exports: [
        AvatarModule,
        ButtonModule,
        CardModule,
        ConfirmDialogModule,
        DividerModule,
        FileUploadModule,
        InputTextModule,
        InputTextareaModule,
        RippleModule,
        ScrollTopModule,
        TieredMenuModule,
        ToastModule,
    ],
    providers: [ConfirmationService, MessageService],
})
export class PrimeModule {}
