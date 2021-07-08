import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { ButtonModule } from "primeng/button";
import { CommonModule } from "@angular/common";
import { DividerModule } from "primeng/divider";
import { InputTextModule } from "primeng/inputtext";
import { RippleModule } from "primeng/ripple";
import { RouterModule } from "@angular/router";

@NgModule({
    declarations: [],
    exports: [
        BrowserModule,
        BrowserAnimationsModule,
        ButtonModule,
        CommonModule,
        DividerModule,
        InputTextModule,
        RippleModule,
        RouterModule,
    ],
})
export class MySharedModule {}
