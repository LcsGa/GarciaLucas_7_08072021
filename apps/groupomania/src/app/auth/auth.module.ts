import { NgModule } from "@angular/core";
import { CardModule } from "primeng/card";

import { SigninComponent } from "./signin/signin.component";
import { SignupComponent } from "./signup/signup.component";
import { MySharedModule } from "../shared/modules/my-shared.module";

@NgModule({
    declarations: [SigninComponent, SignupComponent],
    imports: [CardModule, MySharedModule],
})
export class AuthModule {}
