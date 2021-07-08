import { NgModule } from "@angular/core";
import { CardModule } from "primeng/card";
import { MySharedModule } from "../shared/modules/my-shared.module";
import { PasswordModule } from "primeng/password";

import { SigninComponent } from "./signin/signin.component";
import { SignupComponent } from "./signup/signup.component";

@NgModule({
    declarations: [SigninComponent, SignupComponent],
    imports: [CardModule, MySharedModule, PasswordModule],
})
export class AuthModule {}
